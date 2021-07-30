function firstOff() {
  let name = prompt("What is your nickname?");
  let email = prompt("What is your email?");
  let subscribe = prompt("Would you like to subscribe to our newsletter?");
  subscribe = subscribe.toLowerCase();
  subscribe = subscribe.trim();
  subscribe = subscribe.replace("sure", "yes");
  subscribe = subscribe.replace("yeah", "yes");
  subscribe = subscribe.replace("absolutely", "yes");

  if (subscribe === "yes") {
    alert(
      "Thank you " +
        name +
        "!" +
        " You're now a member of our list of awesome people. Please verify " +
        email +
        " to activate your subscription! 💎"
    );
  } else {
    alert("Well, I hope you're at least thinking about it " + name + "! 🤔");
  }
}

let discountButton = document.querySelector("button");

discountButton.addEventListener("click", firstOff);
