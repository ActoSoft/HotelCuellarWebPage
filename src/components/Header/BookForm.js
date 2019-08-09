import React from 'react';
import {Button} from '../Common';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookForm = ({visible, setBookFormVisible, className}) => {
  return(
    <form className={`form ${className ? className : ''}`}>
      <h3 className="col-full">Reserva Ahora</h3>
      <div className="no-padding input-control  col-half">
        <label htmlFor="fechaEntrada">Fecha de Entrada</label>
      </div>
      <div className="no-padding input-control  col-half">
        <label htmlFor="fechaSalida">Fecha de Salida</label>
      </div>
      <div className="input-control form-dates col-full">
        <DatePicker required id="fechaEntrada" />
        <DatePicker required id="fechaSalida" />
      </div>
      <div className="padding-top input-control  col-half">
        <label htmlFor="adultos">Adultos</label>
      </div>
      <div className="padding-top input-control  col-half">
        <label htmlFor="ninos">Niños</label>
      </div>
      <div className="input-control form-numbers col-full">
        <input required type="number" id="adultos" name="adultos" />
        <input required type="number" id="ninos" name="ninos" />
      </div>
      <div className="input-control col-full">
        <label htmlFor="tipoHabitacion">Tipo de Habitación</label>
        <select defaultValue="0" required id="tipoHabitacion" name="tipoHabitacion" >
          <option disabled value="0">Selecciona una habitación</option>
        </select>
      </div>
      <div className="input-control col-full">
        <label htmlFor="nombre">Nombre</label>
        <input required type="text" id="nombre" name="nombre" />
      </div>
      <div className="input-control col-full">
        <label htmlFor="email">Email</label>
        <input required type="email" id="email" name="email" />
      </div>
      <div className="input-control col-full">
        <Button>
          Reservar
        </Button>
      </div>
    </form>
  );
};

export default BookForm;