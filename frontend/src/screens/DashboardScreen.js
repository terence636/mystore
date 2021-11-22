import DashboardMenu from '../components/DashboardMenu.js'

const DashboardScreen = {
  after_render: () => {},

  render: () => `
    <div class="dashboard">
    ${DashboardMenu.render({ selected: "dashboard" })}
      <div class="dashboard-content">
        <h1>Dashboard</h1>
      </div>
    </div>`,
};

export default DashboardScreen;
