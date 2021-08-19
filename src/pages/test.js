import React from "react";
import { useHistory } from "react-router-dom";

const Test = () => {
  let history = useHistory();

  const rawHTML =
    `
<div class="jumbotron jumbotron-fluid">
<div class="container">
  ` +
    <button onClick={history.goBack}>Back</button> +
    `
  <h1 class="display-4">Delivery Management System</h1>
  <p class="lead">
    Technologies used: <span class="tech_used">Swift(iOS app)</span>, <span class="tech_used">React JS(Dashboard)</span>, <span class="tech_used">PHP Laravel</span>, <span class="tech_used">MySQL</span>
  </p>
</div>
</div>

<div class="container">

<div class="row sections">
  <div class="col-sm-7">
    <img src="img/deliver-mgmt/interfaces-thumb.png" onclick="openImgModal(this.id)" id="interfaces" alt="Interfaces" class="img-fluid project-img">
  </div>
  <div class="col-sm-5">
    This system consist of 4 interfaces.
      <ul>
        <li>Admin</li>
        <li>User</li>
        <li>Driver</li>
        <li>Referrer</li>
      </ul>
    It is used to:
    <ul>
      <li>create orders by users,</li>
      <li>facilitate the scheduling and assigning of collection/delivery tasks to drivers,</li>
      <li>assist the recording and tracking of commissions awarded and paid to referrals.</li>
    </ul>
    The HTML mockup of the first draft of the interface designs can be found <a href="https://github.com/ikikika/html-delapp-mockup">here</a>.
  </div>
</div>

<div class="clearfix"></div>

<div class="row sections">
  <div class="col-sm-12">
    <h2>User Interface</h2>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/user-login-thumb.png" onclick="openImgModal(this.id)" id="user-login" alt="User Login" class="img-fluid project-img">
    <p>User login.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/user-dashboard-thumb.png" onclick="openImgModal(this.id)" id="user-dashboard" alt="User Interface" class="img-fluid project-img">
    <p>In the dashboard, user can see the status of their orders.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/user-createorder-thumb.png" onclick="openImgModal(this.id)" id="user-createorder" alt="User Create Order" class="img-fluid project-img">
    <p>Users can create orders.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/user-vieworder-thumb.png" onclick="openImgModal(this.id)" id="user-vieworder" alt="User View Order" class="img-fluid project-img">
    <p>Users can see their orders.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/user-timeline-thumb.png" onclick="openImgModal(this.id)" id="user-timeline" alt="User Timeline" class="img-fluid project-img">
    <p>Users can see the timeline progress of their orders.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/user-timelineimg-thumb.png" onclick="openImgModal(this.id)" id="user-timelineimg" alt="User Timeline with Image" class="img-fluid project-img">
    <p>Users can see images of items or documents uploaded by driver when task is completed.</p>
  </div>
</div>

<div class="row sections">
  <div class="col-sm-12">
    <h2>Admin Interface</h2>
  </div>

  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-login-thumb.png" onclick="openImgModal(this.id)" id="admin-login" alt="Admin Login" class="img-fluid project-img">
    <p>Admin Login.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-dashboard-thumb.png" onclick="openImgModal(this.id)" id="admin-dashboard" alt="Admin Dashboard" class="img-fluid project-img">
    <p>In the dashboard, orders that are in critical condition of failing will be displayed, along with the assigned driver's contact details.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-createusers-thumb.png" onclick="openImgModal(this.id)" id="admin-createusers" alt="Admin Create Users" class="img-fluid project-img">
    <p>Admins can create users, drivers, referrals and other admin accounts.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-deactivateacct-thumb.png" onclick="openImgModal(this.id)" id="admin-deactivateacct" alt="Admin Deactivate Accounts" class="img-fluid project-img">
    <p>Admins can activate/deactivate accounts, or set a date in the future where user accounts will be automatically deactivated.</p>
  </div>

  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-orders-thumb.png" onclick="openImgModal(this.id)" id="admin-orders" alt="Admin View Order Details" class="img-fluid project-img">
    <p>Admins can view order details.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-adddropoff-thumb.gif" onclick="openImgModal(this.id)" id="admin-adddropoff" alt="Admin Add Dropoff" class="img-fluid project-img">
    <p>Admins can add additional dropoff points for orders.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-schedule-thumb.png" onclick="openImgModal(this.id)" id="admin-schedule" alt="Admin Schedule Drivers" class="img-fluid project-img">
    <p>Admins can schedule and assign tasks for drivers. Admins will not be allowed to change the tasks if the driver has started the task.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-invoice-thumb.png" onclick="openImgModal(this.id)" id="admin-invoice" alt="Admin Invoices" class="img-fluid project-img">
    <p>Admins can generate invoices for orders.</p>
  </div>

  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-incentives-thumb.png" onclick="openImgModal(this.id)" id="admin-incentives" alt="Admin Drivers' Incentives" class="img-fluid project-img">
    <p>Admins can record incentives to be awarded to drivers.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-commissions-thumb.png" onclick="openImgModal(this.id)" id="admin-commissions" alt="Admin Referrals' Commissions" class="img-fluid project-img">
    <p>Admins can award commissions to referrals.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-payment-thumb.png" onclick="openImgModal(this.id)" id="admin-payment" alt="Admin Referrals' Payment" class="img-fluid project-img">
    <p>Admins can record payments made to referrals.</p>
  </div>
  <div class="col-sm-3">
    <img src="img/deliver-mgmt/admin-permissions-thumb.png" onclick="openImgModal(this.id)" id="admin-permissions" alt="Admin Permissions" class="img-fluid project-img">
    <p>Superadmins can create admin accounts with limited permissions.</p>
  </div>

</div>

<div class="row sections">
  <div class="col-sm-12">
    <h2>Driver Interface</h2>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/driver-login-thumb.png" onclick="openImgModal(this.id)" id="driver-login" alt="Driver Login" class="img-fluid project-img">
    <p>Driver login.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/driver-dashboard-thumb.png" onclick="openImgModal(this.id)" id="driver-dashboard" alt="Driver Dashboard" class="img-fluid project-img">
    <p>Drivers can see assigned tasks.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/driver-starttask-thumb.png" onclick="openImgModal(this.id)" id="driver-starttask" alt="Driver Start Task" class="img-fluid project-img">
    <p>Drivers can start the tasks.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/driver-upload-img-thumb.png" onclick="openImgModal(this.id)" id="driver-upload-img" alt="Driver Upload Images" class="img-fluid project-img">
    <p>Drivers can upload images of before completing the task.</p>
  </div>

  <div class="col-sm-2">
    <img src="img/deliver-mgmt/driver-viewtasks-thumb.png" onclick="openImgModal(this.id)" id="driver-viewtasks" alt="Driver View COmpleted Tasks" class="img-fluid project-img">
    <p>Drivers can see the list of tasks they have completed.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/driver-incentives-thumb.png" onclick="openImgModal(this.id)" id="driver-incentives" alt="Driver Incentives" class="img-fluid project-img">
    <p>Drivers can see and filter incentives they were awarded.</p>
  </div>



</div>

<div class="row sections">
  <div class="col-sm-12">
    <h2>Referral Interface</h2>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/referral-login-thumb.png" onclick="openImgModal(this.id)" id="referral-login" alt="Refferal Login" class="img-fluid project-img">
    <p>Referral login.</p>
  </div>
  <div class="col-sm-2">
    <img src="img/deliver-mgmt/referral-payments-thumb.png" onclick="openImgModal(this.id)" id="referral-payments" alt="Refferal Payments" class="img-fluid project-img">
    <p>Referrals can see the payments made to them.</p>
  </div>
</div>


<!-- The Modal -->
<div id="myModal" class="modal">
  <!-- The Close Button -->
  <span class="close">×</span>
  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">
  <!-- Modal Caption (Image Text) -->
  <div id="caption"></div>
</div>

<button onclick="topFunction();return false;" id="back-to-top-btn" title="Go to top">Top</button>
</div>`;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }} />;
    </>
  );
};

export default Test;
