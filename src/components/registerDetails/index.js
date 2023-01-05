import React from 'react';
import Select from '../select';
import './style.css';

const RegisterDetails = () => {
  return (
    <div className="details-container">
      <Select
        options={[
          'Qual é o seu tempo de experiência?',
          'Menos que 1 ano',
          '1 ano',
          '2 anos',
          '3 anos',
          'Mais que 3 anos',
        ]}
        defaultValue={'Qual é o seu tempo de experiência?'}
      />
      <Select
        options={[
          'Qual a sua área de atuação?',
          'Desenvolvedor Front-end',
          'Desenvolvedor Back-end',
          'Desenvolvedor Full Stack',
          'DevOps',
          'UI/UX Design',
          'Product Maneger',
          'Product Owner',
          'Product Design',
        ]}
        defaultValue={'Qual a sua área de atuação?'}
      />
      <Select
        options={[
          'Em qual estado você reside?',
          'AC',
          'AL',
          'AP',
          'AM',
          'BA',
          'CE',
          'DF',
          'ES',
          'GO',
          'MA',
          'MT',
          'MS',
          'MG',
          'PA',
          'PB',
          'PR',
          'PE',
          'PI',
          'RJ',
          'RN',
          'RS',
          'RO',
          'RR',
          'SC',
          'SP',
          'SE',
          'TO',
          'Outro'
        ]}
        defaultValue={'Em qual estado você reside?'}
      />
    </div>
  );
};

export default RegisterDetails;
