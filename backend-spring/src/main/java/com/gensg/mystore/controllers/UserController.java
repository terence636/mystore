package com.gensg.mystore.controllers;

import com.gensg.mystore.models.Users;
import com.gensg.mystore.service.UsersService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.util.Calendar;
import java.util.Date;

class AuthUserResponseBody {

    private Long _id;
    private String name;
    private String email;
    private Boolean isAdmin;
    private String token;

    public AuthUserResponseBody(Long _id, String name, String email, Boolean isAdmin, String token) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
        this.token = token;
    }

    public Long get_id() {
        return _id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Boolean getIsAdmin() {
        return isAdmin;
    }

    public String getToken() {
        return token;
    }
}

class AuthUserRequestBody
{

    private final String email;

    private final String password;

    public AuthUserRequestBody(String email, String password )
    {
        this.email = email;
        this.password = password;
    }

    public String getEmail()
    {
        return email;
    }

    public String getPassword()
    {
        return password;
    }
}

@RestController
@CrossOrigin( "*" )
public class UserController
{
    @Autowired
    private UsersService usersService;

    @PostMapping( "/users/auth" )
    public ResponseEntity<AuthUserResponseBody> auth(@RequestBody AuthUserRequestBody loginDetails )
        throws ServletException
    {
        Users user = usersService.getUsers(loginDetails.getEmail());

        if(user == null)
            throw new ServletException( "Invalid login. Please check your email and password." );

        if ( loginDetails.getEmail().equals( user.getEmail() ) && loginDetails.getPassword().equals( user.getPassword() ) )
        {
            String token = generateToken( loginDetails.getEmail());
            AuthUserResponseBody authUser = new AuthUserResponseBody(user.getId(),user.getName(), user.getEmail(), user.getIsAdmin(), token);
            return new ResponseEntity<AuthUserResponseBody>(authUser, HttpStatus.ACCEPTED);
//            return ResponseEntity.ok(authUser);
        }

        throw new ServletException( "Invalid login. Please check your email and password." );
    }

    private String generateToken( String email )
    {
//        final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
//        final Date createdDate = new Date();
//        final Date expirationDate = new Date(createdDate.getTime() + JWT_TOKEN_VALIDITY * 1000);
        Calendar calendar = Calendar.getInstance();
        calendar.add( Calendar.HOUR, 10 );
        String secret = "this-secret-is-not-very-secret-99";
        return Jwts.builder().setSubject( email ).claim( "role", "user" ).setIssuedAt( new Date() ).setExpiration(
            calendar.getTime() ).signWith( SignatureAlgorithm.HS256, secret ).compact();
    }

    @PostMapping( "/users/register" )
    public ResponseEntity<AuthUserResponseBody> register(@RequestBody Users registerDetails )
            throws ServletException
    {
        if ( usersService.getUsers(registerDetails.getEmail()) == null )
        {
            Users registeredUser = usersService.register( registerDetails );
            String token = generateToken( registerDetails.getEmail());
            AuthUserResponseBody authUser = new AuthUserResponseBody(registeredUser.getId(),registeredUser.getName(), registeredUser.getEmail(), registeredUser.getIsAdmin(), token);
            return new ResponseEntity<AuthUserResponseBody>(authUser, HttpStatus.CREATED);
//            return ResponseEntity.ok(authUser);
        }

        throw new ServletException( "Registration fail. User already registered." );
    }

    @PutMapping( "/api/users/{id}" )
    public ResponseEntity<?> update( @PathVariable Long id, @RequestBody Users userDetails ) throws ServletException {
        Users user = usersService.getUsers(id);
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setIsAdmin(userDetails.getIsAdmin());
        usersService.update( user );
        return ResponseEntity.ok(user);
    }


}
