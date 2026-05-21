const documentacao = {
  openapi: "3.0.3",

  info: {
    title: "API Barbearia",
    description: "Documentação da API do sistema de barbearia",
    version: "1.0.0"
  },

  servers: [
    {
      url: "http://localhost:3003",
      description: "Servidor Local"
    }
  ],

  tags: [
    {
      name: "Usuarios",
      description: "Operações relacionadas aos usuários"
    },
    {
      name: "Servicos",
      description: "Operações relacionadas aos serviços"
    },
    {
      name: "Agendamentos",
      description: "Operações relacionadas aos agendamentos"
    }
  ],

  paths: {

    "/usuarios": {

      get: {
        tags: ["Usuarios"],
        summary: "Listar usuários",
        security: [
          { bearerAuth: [] }
        ],

        responses: {
          200: {
            description: "Lista de usuários",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Lista_Usuarios"
                  }
                }
              }
            }
          }
        }
      },

      post: {
        tags: ["Usuarios"],
        summary: "Cadastrar usuário",

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cadastro_Usuario"
              }
            }
          }
        },

        responses: {
          201: {
            description: "Usuário cadastrado com sucesso"
          },

          500: {
            description: "Erro interno no servidor"
          }
        }
      }
    },

    "/usuarios/{id_usuario}": {

      put: {
        tags: ["Usuarios"],
        summary: "Atualizar usuário",
        security: [
          { bearerAuth: [] }
        ],

        parameters: [
          {
            name: "id_usuario",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Atualizacao_Usuario"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Usuário atualizado"
          },

          404: {
            description: "Usuário não encontrado"
          }
        }
      },

      delete: {
        tags: ["Usuarios"],
        summary: "Remover usuário",
        security: [
          { bearerAuth: [] }
        ],

        parameters: [
          {
            name: "id_usuario",
            in: "path",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],

        responses: {
          200: {
            description: "Usuário removido com sucesso"
          }
        }
      }
    },

    "/login": {

      post: {
        tags: ["Usuarios"],
        summary: "Realizar login",

        requestBody: {
          required: true,

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Login_Usuario"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Login realizado com sucesso",

            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Resposta_Login"
                }
              }
            }
          },

          401: {
            description: "Email ou senha inválidos"
          }
        }
      }
    },

    "/servicos": {

      get: {
        tags: ["Servicos"],
        summary: "Listar serviços",

        security: [
          { bearerAuth: [] }
        ],

        responses: {
          200: {
            description: "Lista de serviços",

            content: {
              "application/json": {
                schema: {
                  type: "array",

                  items: {
                    $ref: "#/components/schemas/Lista_Servicos"
                  }
                }
              }
            }
          }
        }
      },

      post: {
        tags: ["Servicos"],
        summary: "Cadastrar serviço",

        security: [
          { bearerAuth: [] }
        ],

        requestBody: {
          required: true,

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cadastro_Servicos"
              }
            }
          }
        },

        responses: {
          201: {
            description: "Serviço cadastrado"
          }
        }
      }
    },

    "/servicos/{id_servico}": {

      put: {
        tags: ["Servicos"],
        summary: "Atualizar serviço",

        security: [
          { bearerAuth: [] }
        ],

        parameters: [
          {
            name: "id_servico",
            in: "path",
            required: true,

            schema: {
              type: "integer"
            }
          }
        ],

        requestBody: {
          required: true,

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Atualizacao_Servicos"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Serviço atualizado"
          },

          404: {
            description: "Serviço não encontrado"
          }
        }
      },

      delete: {
        tags: ["Servicos"],
        summary: "Remover serviço",

        security: [
          { bearerAuth: [] }
        ],

        parameters: [
          {
            name: "id_servico",
            in: "path",
            required: true,

            schema: {
              type: "integer"
            }
          }
        ],

        responses: {
          200: {
            description: "Serviço removido"
          }
        }
      }
    },

    "/agendamentos": {

      get: {
        tags: ["Agendamentos"],
        summary: "Listar agendamentos",

        security: [
          { bearerAuth: [] }
        ],

        responses: {
          200: {
            description: "Lista de agendamentos",

            content: {
              "application/json": {
                schema: {
                  type: "array",

                  items: {
                    $ref: "#/components/schemas/Lista_Agendamentos"
                  }
                }
              }
            }
          }
        }
      },

      post: {
        tags: ["Agendamentos"],
        summary: "Cadastrar agendamento",

        security: [
          { bearerAuth: [] }
        ],

        requestBody: {
          required: true,

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Cadastro_Agendamentos"
              }
            }
          }
        },

        responses: {
          201: {
            description: "Agendamento cadastrado"
          }
        }
      }
    },

    "/agendamentos/{id_agendamento}": {

      put: {
        tags: ["Agendamentos"],
        summary: "Atualizar agendamento",

        security: [
          { bearerAuth: [] }
        ],

        parameters: [
          {
            name: "id_agendamento",
            in: "path",
            required: true,

            schema: {
              type: "integer"
            }
          }
        ],

        requestBody: {
          required: true,

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Atualizacao_Agendamentos"
              }
            }
          }
        },

        responses: {
          200: {
            description: "Agendamento atualizado"
          },

          404: {
            description: "Agendamento não encontrado"
          }
        }
      },

      delete: {
        tags: ["Agendamentos"],
        summary: "Remover agendamento",

        security: [
          { bearerAuth: [] }
        ],

        parameters: [
          {
            name: "id_agendamento",
            in: "path",
            required: true,

            schema: {
              type: "integer"
            }
          }
        ],

        responses: {
          200: {
            description: "Agendamento removido"
          }
        }
      }
    }
  },

  components: {

    securitySchemes: {

      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Insira o token JWT"
      }
    },

    schemas: {

      Lista_Usuarios: {
        type: "object",

        properties: {
          id_usuario: {
            type: "integer",
            example: 1
          },

          nome: {
            type: "string",
            example: "Aninha"
          },

          email: {
            type: "string",
            example: "Aninha@gmail.com"
          },

          tipo: {
            type: "string",
            example: "A"
          }
        }
      },

      Cadastro_Usuario: {
        type: "object",

        required: [
          "nome",
          "email",
          "senha",
          "tipo"
        ],

        properties: {
          nome: {
            type: "string"
          },

          email: {
            type: "string"
          },

          senha: {
            type: "string"
          },

          tipo: {
            type: "string",
            example: "A"
          }
        }
      },

      Atualizacao_Usuario: {
        type: "object",

        properties: {
          nome: {
            type: "string"
          },

          email: {
            type: "string"
          },

          senha: {
            type: "string"
          },

          tipo: {
            type: "string"
          }
        }
      },

      Login_Usuario: {
        type: "object",

        required: [
          "email",
          "senha"
        ],

        properties: {
          email: {
            type: "string",
            example: "admin@gmail.com"
          },

          senha: {
            type: "string",
            example: "123456"
          }
        }
      },

      Resposta_Login: {
        type: "object",

        properties: {

          message: {
            type: "string",
            example: "login realizado com sucesso"
          },

          token: {
            type: "string",
            example: "eyJhbGciOiJIUzI1NiIsInR5..."
          },

          usuario: {
            type: "object",

            properties: {
              id_usuario: {
                type: "integer",
                example: 1
              },

              nome: {
                type: "string",
                example: "Otavio"
              },

              email: {
                type: "string",
                example: "otavio@gmail.com"
              },

              tipo: {
                type: "string",
                example: "A"
              }
            }
          }
        }
      },

      Lista_Servicos: {
        type: "object",

        properties: {
          id_servico: {
            type: "integer",
            example: 1
          },

          nome: {
            type: "string",
            example: "Corte Degradê"
          },

          preco: {
            type: "number",
            example: 35.00
          },

          descricao: {
            type: "string",
            example: "Corte masculino degradê"
          }
        }
      },

      Cadastro_Servicos: {
        type: "object",

        required: [
          "nome",
          "preco"
        ],

        properties: {
          nome: {
            type: "string"
          },

          preco: {
            type: "number"
          },

          descricao: {
            type: "string"
          }
        }
      },

      Atualizacao_Servicos: {
        type: "object",

        properties: {
          nome: {
            type: "string"
          },

          preco: {
            type: "number"
          },

          descricao: {
            type: "string"
          }
        }
      },

      Lista_Agendamentos: {
        type: "object",

        properties: {

          id_agendamento: {
            type: "integer",
            example: 1
          },

          id_usuario: {
            type: "integer",
            example: 2
          },

          id_servico: {
            type: "integer",
            example: 1
          },

          data_hora: {
            type: "string",
            example: "2026-04-25 14:00:00"
          },

          status: {
            type: "string",
            example: "confirmado"
          }
        }
      },

      Cadastro_Agendamentos: {
        type: "object",

        required: [
          "id_usuario",
          "id_servico",
          "data_hora",
          "status"
        ],

        properties: {

          id_usuario: {
            type: "integer"
          },

          id_servico: {
            type: "integer"
          },

          data_hora: {
            type: "string",
            example: "2026-04-25 14:00:00"
          },

          status: {
            type: "string",
            example: "confirmado"
          }
        }
      },

      Atualizacao_Agendamentos: {
        type: "object",

        properties: {

          id_usuario: {
            type: "integer"
          },

          id_servico: {
            type: "integer"
          },

          data_hora: {
            type: "string"
          },

          status: {
            type: "string"
          }
        }
      }
    }
  }
}

export default documentacao