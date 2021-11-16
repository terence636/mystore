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

class UserResponseBody {

    private Long _id;
    private String name;
    private String email;
    private Boolean isAdmin;
    private String token;
    private String message;

    public UserResponseBody() {}
    public UserResponseBody(Long _id, String name, String email, Boolean isAdmin, String token, String message) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
        this.token = token;
        this.message = message;
    }
    public UserResponseBody(String message) {
        this._id = null;
        this.name = "";
        this.email = "";
        this.isAdmin = null;
        this.token = "";
        this.message = message;
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

    public String getToken() {
        return token;
    }

    public Boolean getIsAdmin() { return isAdmin; }

    public String getMessage() { return message; }

}

//class UserRequestBody
//{
//
//    private final String email;
//
//    private final String password;
//
//    public UserRequestBody(String email, String password )
//    {
//        this.email = email;
//        this.password = password;
//    }
//
//    public String getEmail()
//    {
//        return email;
//    }
//
//    public String getPassword()
//    {
//        return password;
//    }
//}

@RestController
@CrossOrigin( "*" )
public class UserController
{
    @Autowired
    private UsersService usersService;

    @PostMapping( "/users/auth" )
    public ResponseEntity<?> auth(@RequestBody Users loginDetails )
        throws ServletException
    {
        Users user = usersService.getUsers(loginDetails.getEmail());

        if ( user != null && loginDetails.getEmail().equals( user.getEmail() ) && loginDetails.getPassword().equals( user.getPassword() ) )
        {
            String token = generateToken( loginDetails.getEmail());
            UserResponseBody response = new UserResponseBody(user.getId(),user.getName(), user.getEmail(), user.getIsAdmin(), token, "Login successful");
            return new ResponseEntity(response, HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity(new UserResponseBody("Wrong password or email"), HttpStatus.FORBIDDEN);
        }
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
    public ResponseEntity<?> register(@RequestBody Users registerDetails )
            throws ServletException
    {
        if ( usersService.getUsers(registerDetails.getEmail()) == null )
        {
            Users registeredUser = usersService.register( registerDetails );
            if(registeredUser == null) {
                return new ResponseEntity(new UserResponseBody("Invalid user data"), HttpStatus.FORBIDDEN);
            }
            String token = generateToken( registerDetails.getEmail());
            UserResponseBody response = new UserResponseBody(registeredUser.getId(),registeredUser.getName(),
                    registeredUser.getEmail(), registeredUser.getIsAdmin(), token, "Registered Successfully");
            return new ResponseEntity(response, HttpStatus.CREATED);
        } else {
            return new ResponseEntity(new UserResponseBody("User already registered"), HttpStatus.CONFLICT);
        }


    }

    @PutMapping( "/api/users/{id}" )
    public ResponseEntity<?> update( @PathVariable Long id, @RequestBody Users request ) throws ServletException {
        Users user = usersService.getUsers(id);
        if ( user == null ) {
            return new ResponseEntity(new UserResponseBody("User Not Found"), HttpStatus.NOT_FOUND);
        }

        if ( user.getPassword().equals(request.getPassword()) ) {
            user.setName(request.getName());
            user.setEmail(request.getEmail());
//            user.setPassword(request.getPassword());
//            user.setIsAdmin(request.getIsAdmin());
            Users saved = usersService.update(user);

            // Generate new token for updated user info
            String token = generateToken(saved.getEmail());
            UserResponseBody response = new UserResponseBody(saved.getId(), saved.getName(), saved.getEmail(), saved.getIsAdmin(), token, "Update successful");
            return new ResponseEntity(response, HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity(new UserResponseBody("Wrong Password"), HttpStatus.FORBIDDEN);
        }

    }


}
