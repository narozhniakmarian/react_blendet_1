interface CallbackInterface {
  (status: string): void;
}

function sendDoneStatus(callback: CallbackInterface): void {
  callback("done");
}

sendDoneStatus((status) => {
  console.log(status);
});
