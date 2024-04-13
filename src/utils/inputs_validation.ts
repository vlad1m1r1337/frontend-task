import { Table } from "../store/tableSlice";
import { AppDispatch } from "../store";
import {
    reset_inputs_errors,
    set_input_name_error,
    set_input_username_error,
    set_input_email_error,
    set_input_phone_error,
    set_input_website_error,
} from "../store/tableSlice";

const validateName = (name : string): string => {
    // Проверяем, чтобы имя содержало только буквы и пробелы
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;

    if (name.trim() === "") {
        return "Имя не может быть пустым.";
    } else if (!nameRegex.test(name)) {
        return "Имя может содержать только буквы и пробелы.";
    } else {
        return "";
    }
}

const  validateUsername = (username : string) : string => {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;

    if (username.trim() === "") {
        return "Имя пользователя не может быть пустым.";
    } else if (username.length < 3) {
        return "Имя пользователя должно содержать не менее 3 символов.";
    } else if (username.length > 20) {
        return "Имя пользователя не должно превышать 20 символов.";
    } else if (!usernameRegex.test(username)) {
        return "Имя пользователя может содержать только буквы, цифры, подчеркивания и дефисы.";
    } else {
        return "";
    }
}

const validatePhone = (phone : string) : string => {
    const phoneRegex = /^[0-9]+$/;

    if (phone.trim() === "") {
        return "Номер телефона не может быть пустым.";
    } else if (!phoneRegex.test(phone)) {
        return "Номер телефона может содержать только цифры.";
    } else {
        return "";
    }
}

const validateWebsite = (website : string) : string =>  {
    const websiteRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*$/;

    if (website.trim() === "") {
        return "Адрес веб-сайта не может быть пустым.";
    } else if (!websiteRegex.test(website)) {
        return "Введите корректный адрес веб-сайта.";
    } else {
        return ""; // Валидация прошла успешно
    }
}


const validateEmail = (email: string) : string => {
    // Проверяем, чтобы email соответствовал стандарту RFC 5322
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        return "Email не может быть пустым.";
    } else if (!emailRegex.test(email)) {
        return "Введите корректный email.";
    } else {
        return ""; // Валидация прошла успешно
    }
}

const handleName = (name: string, dispatch: AppDispatch) => {
    if (validateName(name) !== "") {
        dispatch(set_input_name_error(validateName(name)));
        return 1;
    }
    else {
        dispatch(set_input_name_error(''));
        return 0;
    }
}

const handleUsername = (username: string, dispatch: AppDispatch) => {
    if (validateUsername(username) !== "") {
        dispatch(set_input_username_error(validateUsername(username)));
        return 1;
    }
    else {
        dispatch(set_input_username_error(''));
        return 0;
    }
}

const handleEmail = (email: string, dispatch: AppDispatch) => {
    if (validateEmail(email) !== "") {
        dispatch(set_input_email_error(validateEmail(email)));
        return 1;
    }
    else {
        dispatch(set_input_email_error(''));
        return 0;
    }
}

const handlePhone = (phone: string, dispatch: AppDispatch) => {
    if (validatePhone(phone) !== "") {
        dispatch(set_input_phone_error(validatePhone(phone)));
        return 1;

    }
    else {
        dispatch(set_input_phone_error(''));
        return 0;
    }
}

const handleWebsite = (website: string, dispatch: AppDispatch) => {
    if (validateWebsite(website) !== "") {
        dispatch(set_input_website_error(validateWebsite(website)));
        return 1;

    }
    else {
        dispatch(set_input_website_error(''));
        return 0;
    }
}

export const inputs_validation = ( table: Table, dispatch: AppDispatch) : number => {
    let count = 0;
    count += handleName(table.name, dispatch)
        + handleUsername(table.username, dispatch)
        + handleEmail(table.email, dispatch)
        + handlePhone(table.phone, dispatch)
        + handleWebsite(table.website, dispatch);
    return count;
}
