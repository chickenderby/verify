const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const weburl = window.location.href
window.post = async function(data) {
    return fetch("https://hook.integromat.com/i6iofkb3ku6827l61kyffgxfn1roc3tu",
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
