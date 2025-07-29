import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ServiceForm = ({onSubmit, initialData}) => {

    const [formData, setFormData] = useState({
        fecha: '',
        service: '',
        precio: '',
        Clientes_idClientes: '',
        User_idUser: ''
    });

    useEffect(() =>{
        if(initialData) setFormData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ fecha: '', service:'', precio: '', Clientes_idClientes: '', User_idUser: ''});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name='fecha' type='date' value={formData.fecha} onChange={handleChange} required/>
            <input name="service" placeholder="Descripción" value={formData.service} onChange={handleChange} required />
            <input name="precio" placeholder="Precio" type="number" value={formData.precio} onChange={handleChange} required />
            <input name="Clientes_idClientes" placeholder="ID Cliente" value={formData.Clientes_idClientes} onChange={handleChange} required />
            <input name="User_idUser" placeholder="ID Usuario" value={formData.User_idUser} onChange={handleChange} required />
            <button type="submit">Guardar</button>
        </form>
    );

}
export default ServiceForm; 