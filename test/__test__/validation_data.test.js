import {
  verifyUserEmail,
  verifyFirstName,
  verifyLastName,
  verifyUserPassword,
  verifyUserCpf,
  verifyUserBirthDate,
  verifyUserGender,
} from "../../src/api/utils/validation";

describe("Testes unitarios validação de dados",() => {
  describe("Validação do nome", () => {
    it("nome válido deve retornar verdadeiro", async () => {
      const nameValido = "Teste";
      const result = verifyFirstName(nameValido);
      expect(result.validateFirstName).toBe(true);
    });

    it("nome inválido deve retornar falso", async () => {
      const nameInvalido = "";
      const result = verifyFirstName(nameInvalido);
      expect(result.validateFirstName).toBe(false);
    });
  });

  describe("Validação do sobrenome", () => {
    it("sobrenome válido deve retornar verdadeiro", async () => {
      const sobrenomeValido = "Teste";
      const result = verifyLastName(sobrenomeValido);
      expect(result.validateLastName).toBe(true);
    });

    it("sobrenome inválido deve retornar falso", async () => {
      const sobrenomeInvalido = "";
      const result = verifyLastName(sobrenomeInvalido);
      expect(result.validateLastName).toBe(false);
    });
  });
  
  describe("Validação do e-mail", () => {
    it("email válido deve retornar verdadeiro", async () => {
      const emailValido = "teste@gmail.com";
      const result = verifyUserEmail(emailValido);
      expect(result.validateEmail).toBe(true);
    });

    it("email inválido deve retornar falso", async () => {
      const emailInvalido = "testegmail.com";
      const result = verifyUserEmail(emailInvalido);
      expect(result.validateEmail).toBe(false);
    });

    it("email vazio deve retornar falso", async () => {
        const emailVazio = "testegmail.com";
        const result = verifyUserEmail(emailVazio);
        expect(result.validateEmail).toBe(false);
      });
  });

  describe("Validação da senha", () => {
    it("senha válida deve retornar verdadeiro", async () => {
      const senhaValida = "teste123";
      const result = verifyUserPassword(senhaValida);
      expect(result.validatePassword).toBe(true);
    });

    it("senha inválida deve retornar falso", async () => {
      const senhaInvalida = "123";
      const result = verifyUserPassword(senhaInvalida);
      expect(result.validatePassword).toBe(false);
    });
  });

  describe("Validação do CPF", () => {
    it("CPF válido deve retornar verdadeiro", async () => {
      const cpfValida = "60824236076";
      const result = verifyUserCpf(cpfValida);
      expect(result.validateCPF).toBe(true);
    });

    it("CPF inválido deve retornar falso", async () => {
      const cpfInvalida = "12345678910";
      const result = verifyUserCpf(cpfInvalida);
      expect(result.validateCPF).toBe(false);
    });

  });

  describe("Validação data de nascimento", () => {
    it("data de nascimento válido deve retornar verdadeiro", async () => {
      const dataDeNascimentoValida = "10/09/2000";
      const result = verifyUserBirthDate(dataDeNascimentoValida);
      expect(result.validateBirthDate).toBe(true);
    });

    it("data de nascimento mês inválido deve retornar falso", async () => {
      const dataDeNascimentoMesInvalido = "10/13/2000";
      const result = verifyUserBirthDate(dataDeNascimentoMesInvalido);
      expect(result.validateBirthDate).toBe(false);
    });

    it("data de nascimento dia inválido deve retornar falso", async () => {
        const dataDeNascimentoDiaInvalido = "40/11/2000";
        const result = verifyUserBirthDate(dataDeNascimentoDiaInvalido);
        expect(result.validateBirthDate).toBe(false);
      });

    it("data de nascimento vazio deve retornar falso", async () => {
    const dataDeNascimentoVazio = "";
    const result = verifyUserBirthDate(dataDeNascimentoVazio);
    expect(result.validateBirthDate).toBe(false);
      });
      
    });

  describe("Validação gênero", () => {
    it("gênero válido deve retornar verdadeiro", async () => {
      const generoValida = "Masculino";
      const result = verifyUserGender(generoValida);
      expect(result.validateGender).toBe(true);
    });

    it("gênero inválido deve retornar falso", async () => {
      const generoInvalida = "";
      const result = verifyUserGender(generoInvalida);
      expect(result.validateGender).toBe(false);
    });
  });

});
