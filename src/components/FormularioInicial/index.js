import styled from 'styled-components';

const FormularioInicial = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding : 0 32px;
`;

FormularioInicial.Input = styled.input`
    color: ${({ theme }) => theme.colors.contrastText};
    padding: 14px;
    margin: 3px 0;
    font-size: 14px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

FormularioInicial.Button = styled.button`
    color: ${({ theme }) => theme.colors.contrastText};
    padding: 5px;
    margin: 15px 0;
    font-size: 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};;
`;
export default FormularioInicial;
