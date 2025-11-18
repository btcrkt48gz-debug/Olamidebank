// Demo Bank JS - Professional realistic simulation
const accountsKey = 'demoBankAccounts';
const transactionsKey = 'demoBankTransactions';

function loadAccounts(){return JSON.parse(localStorage.getItem(accountsKey)||'[]');}
function saveAccounts(accounts){localStorage.setItem(accountsKey, JSON.stringify(accounts));}
function loadTransactions(){return JSON.parse(localStorage.getItem(transactionsKey)||'[]');}
function saveTransactions(transactions){localStorage.setItem(transactionsKey, JSON.stringify(transactions));}

function addAccount(name,balance){const accounts = loadAccounts(); const acc={id:crypto.randomUUID(),name:name,balance:balance}; accounts.push(acc); saveAccounts(accounts); return acc;}
function addTransaction(type,amount,from,to){const txs=loadTransactions(); const tx={id:crypto.randomUUID(),type:type,amount:amount,from:from,to:to,date:new Date().toLocaleString()}; txs.push(tx); saveTransactions(txs);return tx;}

document.addEventListener('DOMContentLoaded',()=>{console.log('Demo Bank loaded');});
