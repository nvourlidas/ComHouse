<!-- Header.vue -->
<template>
    <header>
      <div class="container">
        <div class="logo">
          <router-link to="/"><img src="src/assets/cropped-logo_transparent-1.png"></router-link>
        </div>
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <!-- Add more navigation links as needed -->
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    // You can add component-specific logic here if needed
  };
  </script>
  
  <style>
  /* Add styling for your header */
  header {
    background-color: rgba(0, 0, 0, 0.5); /* Transparent black background */
    color: #fff;
    padding: 10px 0; /* Adjust the padding as needed */
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px; /* Set your desired max-width */
    margin: 0 auto; /* Center the content */
  }
  
  .logo {
    font-size: 1.5rem; /* Adjust the font size */
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  nav li {
    margin-right: 20px;
  }
  
  nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  
  /* Media query for responsiveness */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
  
    nav {
      margin-top: 10px;
    }
  }
  </style>
  