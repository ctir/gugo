/*
main.js
  Author: Charles Tiriamai
  Date: 2019/2/7
  Update: 2019/2/8
*/

/* Functions Definitions */

function showAlert(id) {
  var alertString = "Sorry! This feature hasn't been implemented yet. Coming Soon!";
  var elemStyle = document.getElementById(id).style;

  elemStyle.color = "#f00";
  if (id == "keywords") {
    elemStyle.borderColor = "#f00";
  }
  alert(alertString);
}

function submitForm() {
  var alertString = "Thanks for your message, we will get back to you soon. Redirecting back to home page.";
  alert(alertString);
}

function showDropDown() {
  document.getElementById("dropdown-menu").style.display = "block";
  document.getElementById("hover-arrow").innerHTML = "arrow_upward";
}

function hideDropDown() {
  document.getElementById("dropdown-menu").style.display = "none";
  document.getElementById("hover-arrow").innerHTML = "arrow_downward";
}

function closeModal() {
  document.getElementById("topics-modal").style.display = "none";
  document.getElementById('body').style.overflow = "auto";
}

function showHoverColor(id) {
  document.getElementById(id).style.color = "#666";
}

function hideHoverColor(id) {
  document.getElementById(id).style.color = "#77a9c0";
}

function constructEventListeners() {
  var profileIcon = document.getElementById("profile-icon");
  var dropdown = document.getElementById("dropdown-container");
  var closeBtn = document.getElementById("close-modal-btn");
  var submitBtn = document.getElementById("submit-btn");
  var keywords = document.getElementById("keywords");
  var topicArticle = document.getElementById("topic-article-1");
  var contactSubmitBtn = document.getElementById("contact-submit-btn");

  dropdown.addEventListener("mouseover", () => { showDropDown() });    /* Adapated from: https://stackoverflow.com/a/16310439 */
  dropdown.addEventListener("mouseout", () => { hideDropDown() });
  profileIcon.addEventListener("mouseover", () => { showAlert("profile-icon"); }, { once: true });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => { closeModal() });
  }
  
  if(submitBtn){
    submitBtn.addEventListener("mouseover", () => { showAlert("submit-btn")}, {once: true});
  }

  if (keywords) {
    keywords.addEventListener("mouseover", () => { showAlert("keywords", "Keyword filtering hasn't"); }, { once: true });
  }

  if (topicArticle) {
    topicArticle.addEventListener("mouseover", () => { showHoverColor("topic-link-1", "topic-article-1") })
    topicArticle.addEventListener("mouseout", () => { hideHoverColor("topic-link-1", "topic-article-1") })
  }

  topicArticle = document.getElementById("topic-article-2");

  if (topicArticle) {
    topicArticle.addEventListener("mouseover", () => { showHoverColor("topic-link-2", "topic-article-2") })
    topicArticle.addEventListener("mouseout", () => { hideHoverColor("topic-link-2", "topic-article-2") })
  }

  topicArticle = document.getElementById("topic-article-3");

  if (topicArticle) {
    topicArticle.addEventListener("mouseover", () => { showHoverColor("topic-link-3", "topic-article-3") })
    topicArticle.addEventListener("mouseout", () => { hideHoverColor("topic-link-3", "topic-article-3") })
  }

  topicArticle = document.getElementById("topic-article-4");

  if (topicArticle) {
    topicArticle.addEventListener("mouseover", () => { showHoverColor("topic-link-4", "topic-article-4") })
    topicArticle.addEventListener("mouseout", () => { hideHoverColor("topic-link-4", "topic-article-4") })
  }

  topicArticle = document.getElementById("topic-article-5");

  if (topicArticle) {
    topicArticle.addEventListener("mouseover", () => { showHoverColor("topic-link-5", "topic-article-5") })
    topicArticle.addEventListener("mouseout", () => { hideHoverColor("topic-link-5", "topic-article-5") })
  }

  topicArticle = document.getElementById("topic-article-6");

  if (topicArticle) {
    topicArticle.addEventListener("mouseover", () => { showHoverColor("topic-link-6", "topic-article-6") })
    topicArticle.addEventListener("mouseout", () => { hideHoverColor("topic-link-6", "topic-article-6") })
  }

  if (contactSubmitBtn) {
    contactSubmitBtn.addEventListener("onclick", () => { showFormMsg() })
  }
}

window.addEventListener("load", constructEventListeners);