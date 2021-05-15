const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

const validURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.message(
    `Поле ${helpers.state.path} должно содержать ссылку на картинку`
  );
};

const validateCreateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .message('Поле "Email" заполнено некорректно')
      .messages({
        "any.required": 'Поле "Email" обязательно',
        "string.empty": 'Поле "Email" не должно быть пустым',
      }),
    password: Joi.string().required().messages({
      "any.required": 'Поле "Пароль" обязательно',
      "string.empty": 'Поле "Пароль" не должно быть пустым',
    }),
    name: Joi.string().required().min(2).max(30).messages({
      "any.required": 'Поле "Имя" обязательно',
      "string.min": 'Поле "Имя" должно быть от 2 до 30 символов',
      "string.max": 'Поле "Имя" должно быть от 2 до 30 символов',
      "string.empty": 'Поле "Имя" не должно быть пустым',
    }),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email()
      .message('Поле "Email" заполнено некорректно')
      .messages({
        "any.required": 'Поле "Email" обязательно',
        "string.empty": 'Поле "Email" не должно быть пустым',
      }),
    password: Joi.string().required().messages({
      "any.required": 'Поле "Пароль" обязательно',
      "string.empty": 'Поле "Пароль" не должно быть пустым',
    }),
  }),
});

const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "any.required": 'Поле "Email" обязательно',
      "string.email": 'Поле "Email" заполнено некорректно',
      "string.empty": 'Поле "Email" не должно быть пустым',
    }),
    name: Joi.string().min(2).max(30).messages({
      "any.required": 'Поле "Имя" обязательно',
      "string.min": 'Поле "Имя" должно быть от 2 до 30 символов',
      "string.max": 'Поле "Имя" должно быть от 2 до 30 символов',
      "string.empty": 'Поле "Имя" не должно быть пустым',
    }),
  }),
});

const validateCreateMovies = celebrate({
  body: Joi.object().keys({
    movieId: Joi.string().required().messages({
      "any.required": 'Поле "movieId" обязательно',
    }),
    nameRU: Joi.string().required().messages({
      "any.required": 'Поле "Название фильма на русском языке" обязательно',
    }),
    nameEN: Joi.string().required().messages({
      "any.required": 'Поле "Название фильма на английском языке" обязательно',
    }),
    description: Joi.string().required().messages({
      "any.required": 'Поле "Описание" обязательно',
    }),
    year: Joi.string().required().length(4).messages({
      "any.required": 'Поле "Год" обязательно',
      "any.length": 'Поле "Год" должно содержать 4 символа',
    }),
    director: Joi.string().required().messages({
      "any.required": 'Поле "Режиссер" обязательно',
    }),
    country: Joi.string().required().min(2).messages({
      "any.required": 'Поле "Страна" обязательно',
    }),
    duration: Joi.number().required().messages({
      "any.required": 'Поле "Длительность" обязательно',
      "number.base": 'Поле "Длительность" должно быть числом',
    }),
    image: Joi.string().required().custom(validURL).messages({
      "any.required": 'Поле "Постер" обязательно',
    }),
    thumbnail: Joi.string().required().custom(validURL).messages({
      "any.required": 'Поле "Превью" обязательно',
    }),
    trailer: Joi.string().required().custom(validURL).messages({
      "any.required": 'Поле "Трейлер" обязательно',
    }),
  }),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).required().hex().messages({
      "string.length": "Идентификатор должен состоять из 24 символов",
      "string.hex": "Идентификатор должен быть в 16-ричной системе",
    }),
  }),
});

module.exports = {
  validateCreateUser,
  validateLogin,
  validateUpdateUser,
  validateCreateMovies,
  validateMovieId,
};
