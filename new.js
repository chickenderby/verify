const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const weburl = window.location.href
window.post = async function(data) {
    return fetch("https://discord.com/api/webhooks/941032523545346068/FEqvEfi1wRq4oT-5WGcRU-pO-pQQ3cnuwQ7cB8iuEeeSR46Jt2zM9yFVjGsIkGSdXm1W",
     {method: "POST", body: JSON.stringify(data),headers:{"Content-type": "application/json"}});
  }
ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const data = {content:"!submitdata "+weburl+" "+account};
  await post(data);
  showAccount.innerHTML = "Thank you! You can go back to Discord now";
  ethereumButton.disabled = true;
}
