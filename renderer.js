const information = document.getElementById("info");

information.innerText = `This app is using chrome (v${versions.chrome()}), Node (v${versions.node()}), Electron (v${versions.electron()})`;

const pingFunc = async () => {
  const response = await window.versions.ping();

  console.log({ response });
}

pingFunc();