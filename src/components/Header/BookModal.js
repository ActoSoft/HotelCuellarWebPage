import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Button} from '../Common';

const BookModal = ({visible, setBookFormVisible}) => {
  const handleClose = e => {
    if(e.target.id === 'BookForm') {
      setBookFormVisible(!visible)
    }
  };

  return(
    <article id="BookForm" onClick={handleClose} className={`BookForm ${visible ? 'visible' : 'hidden'}`}>
      <form>
        <div className="input-control col-xs-full col-half">
          <label for="fechaEntrada">Fecha de Entrada</label>
          <DatePicker required id="fechaEntrada" />
        </div>
        <div className="input-control col-xs-full col-half">
          <label for="fechaSalida">Fecha de Salida</label>
          <DatePicker required id="fechaSalida" />
        </div>
        <div className="input-control col-xs-full col-half">
          <label for="adultos">Adultos</label>
          <input required type="number" id="adultos" name="adultos" />
        </div>
        <div className="input-control col-xs-full col-half">
          <label for="ninos">Niños</label>
          <input required type="number" id="ninos" name="ninos" />
        </div>
        <div className="input-control col-full">
          <label for="tipoHabitacion">Tipo de Habitación</label>
          <select required id="tipoHabitacion" name="tipoHabitacion" >
            <option selected disabled value="0">Selecciona una habitación</option>
          </select>
        </div>
        <div className="input-control col-full">
          <label for="nombre">Nombre</label>
          <input required type="text" id="nombre" name="nombre" />
        </div>
        <div className="input-control col-full">
          <label for="email">Email</label>
          <input required type="email" id="email" name="email" />
        </div>
        <div className="input-control col-full">
          <Button>
            Reservar
          </Button>
        </div>
      </form>
    </article>
  )
};

export default BookModal;