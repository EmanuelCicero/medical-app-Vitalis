const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'host.exp.exponent',
  'appium:appActivity': 'host.exp.exponent.experience.HomeActivity'
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

email = "seuemail@gmail.com"
senha = "12345678"
nome = "seunome"
sobrenome = "seusobrenome"
cpf= "04073085042"
dataNascimento = "10/10/2000"

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const acessURL = await driver.$('//*[@text="Enter URL manually"]')
    await acessURL.click();

    const setURL = await driver.$('//*[@text="exp://"]')
    await setURL.setValue("exp://192.168.1.12:8081")

    const buttonConnect = await driver.$('//*[@text="Connect"]')
    await buttonConnect.click()
    
    await driver.pause(10000);

    await driver.$('//*[@content-desc="Bottom Sheet backdrop"]').click();
    
    const buttonEntrar = await driver.$('//*[@resource-id="entrar"]')
    await buttonEntrar.click()

    const inputLoginEmail = await driver.$('//*[@text="Digite seu e-mail"]')
    await inputLoginEmail.click()
    await inputLoginEmail.setValue(email)

    const inputLoginPassword = await driver.$('//*[@text="Digite sua senha"]')
    await inputLoginPassword.click()
    await inputLoginPassword.setValue(senha)
    
    const buttonLogin = await driver.$('//*[@resource-id="login"]')
    await buttonLogin.click()

    await driver.$('//*[@text="OK"]').click()
    
    await driver.$('//*[@text="Cadastre-se"]').click()

    await driver.$('//android.widget.ImageView[@index= "0"]').click()

    const nomeInput = await driver.$('//*[@text="Seu nome"]')
    await nomeInput.click()
    await nomeInput.setValue(nome)

    const sobrenomeInput = await driver.$('//*[@text="Seu sobrenome"]')
    await sobrenomeInput.click()
    await sobrenomeInput.setValue(sobrenome)

    const emailInput = await driver.$('//*[@text="Digite seu e-mail"]')
    await emailInput.click()
    await emailInput.setValue(email)

    const senhaInput = await driver.$('//*[@text="Digite sua senha"]')
    await senhaInput.click()
    await senhaInput.setValue(senha)

    await driver.$('//*[@resource-id="avançar"]').click()

    const cpfInput = await driver.$('//*[@text="Digite seu CPF"]')
    await cpfInput.click()
    await cpfInput.setValue(cpf)

    const dataNascInput = await driver.$('//*[@text="00/00/0000"]')
    await dataNascInput.click()
    await dataNascInput.setValue(dataNascimento)

    const generoInput = await driver.$('//*[@text="Selecione um gênero"]')
    await generoInput.click()

    const setGenero = await driver.$('//*[@text="Masculino"]')
    await setGenero.click()
    
    await driver.$('//*[@resource-id="cadastrar"]').click()

    await driver.$('//*[@text="OK"]').click()

    await driver.$('//*[@resource-id="login"]').click()

    await driver.pause(2000)

    await driver.$('//*[@resource-id="screenDoctors"]').click()

    await driver.$('//*[@text="Minhas consultas"]').click()

    await driver.pause(1500)

    await driver.$('//*[@text="Marcar Consulta"]').click()

    await driver.$('//*[@text="Dra. Fernanda Rodrigues"]').click()

    await driver.pause(1500)

    await driver.$('//*[@resource-id="icon-button"]').click()

    await driver.pause(1500)

    await driver.$('//*[@text="Dr. Pedro Santos"]').click()

    await driver.$('//*[@resource-id="agendarConsulta"]').click()

    await driver.$('//*[@text="26"]').click()

    await driver.$('//*[@text="Selecione um horário"]').click()

    await driver.$('//*[@text="14:00"]').click()

    await driver.$('//*[@resource-id="confirmarAgendamento"]').click()

    await driver.pause(1500)

    await driver.$('//*[@text="Minhas consultas"]').click()

    await driver.$('//*[@resource-id="buttonRemarcar"]').click()

    await driver.$('//*[@text="30"]').click()

    await driver.$('//*[@text="Selecione um horário"]').click()

    await driver.$('//*[@text="10:00"]').click()

    await driver.$('//*[@text="Atualizar Agendamento"]').click()

    await driver.pause(1500)

    await driver.$('//*[@resource-id="buttonCancelar"]').click()

    await driver.pause(1000)

    await driver.$('//*[@resource-id="screenProfile"]').click()

    await driver.$('//*[@text="Sair"]').click()
  } finally {
    await driver.pause(5000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);