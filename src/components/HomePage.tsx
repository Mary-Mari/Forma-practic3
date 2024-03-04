import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import "./Home.css";


interface IFormInput {
    name: string;
    email: string;
    password: string;
}

const HomePage: React.FC = () => {

    {/*Cостояние isRegistering, которое отвечает за то, отображается ли форма регистрации или нет*/}
    const [isRegistering, setIsRegistering] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const navigate = useNavigate();

    {/*Обработчик события формы. Выводит данные формы в консоль и перенаправляет пользователя на страницу "/boards".*/}
    const onSubmit = (data: IFormInput) => {
        console.log(data);
        navigate('/boards');
    };

    return (
        <div>

            
            {!isRegistering && <Button onClick={() => setIsRegistering(true)}>Регистрация</Button>}
            {isRegistering && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('name', { required: true })} style={{ color: 'black' }}placeholder="Имя" />
                    {errors.name && <span>Это поле обязательно</span>}

                    <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} style={{ color: 'black' }} placeholder="Email" />
                    {errors.email && <span>Неверный формат email</span>}

                    <input {...register('password', { required: true, minLength: 8 })} style={{ color: 'black' }} placeholder="Пароль" type="password" />
                    {errors.password && <span>Пароль должен быть не менее 8 символов</span>}

                    <Button>Отправить</Button>
                </form>
            )}
        </div>
    );
};

export default HomePage;
