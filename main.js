let typed = new Typed(".type-text", {
  strings: ["Engineer", "Web Developer", "WordPress", "Shopify"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


// tab section

 
// Function to switch between tabs
// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tab-content");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].classList.remove("active");
//     }
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.classList.add("active");
// }

// // Open the default tab on page load
// document.getElementById("tab1").style.display = "block";
// document.querySelector(".tablink.active").classList.add("active");

// // Hide all tab contents except for the active tab on page reload
// window.onload = function () {
//     var activeTab = document.querySelector(".tablink.active");
//     var activeTabName = activeTab.getAttribute("onclick").match(/'(.*?)'/)[1];
//     var activeContent = document.getElementById(activeTabName);
//     var allTabs = document.querySelectorAll('.tab-content');
//     for (var i = 0; i < allTabs.length; i++) {
//         if (allTabs[i].id !== activeTabName) {
//             allTabs[i].style.display = "none";
//         }
//     }
// };
 