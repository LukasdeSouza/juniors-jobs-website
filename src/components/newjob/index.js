import { useState } from "react";
import { useForm } from "react-hook-form";
import "./index.css";

const NewJobModal = ({ setIsModalOpen, isModalOpen, controller }) => {
  const modalOpenClass = isModalOpen ? " active" : "";
  const { reset, register, handleSubmit } = useForm();

  const handleClick = (e) => {
    if (["modal", "modal active"].includes(e.target.className)) {
      setIsModalOpen(false);
    }
  };

  const onSubmit = (e) => {
    // Todo: send data to API 
    setIsModalOpen(false)
    reset()
  };

  return (
    <div className={"modal" + modalOpenClass} onClick={handleClick}>
      <div className="modal__container">
        <h1>Cadastre uma nova vaga</h1>
        <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal__input-container">
            <span>Logo da Empresa (URL)</span>
            <input
              {...register("logo")}
              className="modal__input--textbox"
              placeholder="Ex: https://logodasuaempresa.com"
            />
          </div>
          <div className="modal__input-container">
            <span>Título da vaga</span>
            <input
              {...register("title")}
              className="modal__input--textbox"
              placeholder="Ex: Desenvolvedor Java"
            />
          </div>
          <div className="modal__input-container">
            <span>Descrição da vaga</span>
            <input
              {...register("description")}
              className="modal__input--textbox"
              placeholder="Ex: Min. 80 palavras"
            />
          </div>
          <div className="modal__input-container">
            <span>Tecnologias</span>
            <input
              {...register("technologies")}
              className="modal__input--textbox"
              placeholder="Ex: React, Vue, Angular"
            />
          </div>
          <div className="modal__input-container">
            <span>Salário</span>
            <input
              {...register("salary")}
              className="modal__input--textbox"
              placeholder="Ex: U$1400.00"
            />
            <div>
              <input
                {...register("salary_pretense")}
                className="modal__input--checkbox"
                id="salario"
                type="checkbox"
              />
              <label for="salario">Enviar pretensão salarial</label>
            </div>
          </div>
          <div className="modal__input-container">
            <span>Local</span>
            <div className="modal__checkbox-container">
              <div>
                <input
                  {...register("remote")}
                  className="modal__input--checkbox"
                  id="remoto"
                  type="checkbox"
                />
                <label for="remoto">Remoto</label>
              </div>
              <div>
                <input
                  {...register("presential")}
                  className="modal__input--checkbox"
                  id="presencial"
                  type="checkbox"
                />
                <label for="presencial">Presencial</label>
              </div>
              <div>
                <input
                  {...register("hybrid")}
                  className="modal__input--checkbox"
                  id="hibrido"
                  type="checkbox"
                />
                <label for="hibrido">Híbrido</label>
              </div>
            </div>
          </div>
          <div className="modal__input-container">
            <span>Nível do cargo</span>
            <div className="modal__checkbox-container">
              <div>
                <input
                  {...register("junior")}
                  className="modal__input--checkbox"
                  id="junior"
                  type="checkbox"
                />
                <label for="junior">Júnior</label>
              </div>
              <div>
                <input
                  {...register("pleno")}
                  className="modal__input--checkbox"
                  id="pleno"
                  type="checkbox"
                />
                <label for="pleno">Pleno</label>
              </div>
              <div>
                <input
                  {...register("senior")}
                  className="modal__input--checkbox"
                  id="senior"
                  type="checkbox"
                />
                <label for="senior">Sênior</label>
              </div>
            </div>
          </div>
          <div className="modal__input-container">
            <span>Link da vaga</span>
            <input
              {...register("link")}
              className="modal__input--textbox"
              placeholder="Ex: https://linkdavaga.com"
            />
          </div>
          <div className="modal_input-container centered">
            <input className="modal__button" type="submit" value="Adicionar Vaga" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewJobModal;
