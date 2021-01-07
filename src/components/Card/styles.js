import styled from 'styled-components';


export const Main = styled.div.attrs(props => ({
    color: props.color || props.theme.colors.background,
    size: props.size || props.theme.sizes.cardNormal,
}))`
    ${props => props.size};
    background: ${props => props.color};
    box-shadow: ${props => props.theme.effects.shadow};   
    border-radius: ${props => props.theme.sizes.borderRadius};
    

    img{
        width: 100%;
        height: 225px;
        border-top-left-radius: ${props => props.theme.sizes.borderRadius};
        border-top-right-radius: ${props => props.theme.sizes.borderRadius}; 
    }
    h1{
        margin-top: 16px;
        font-size: ${props => props.theme.sizes.textSubTitle};
        //font-weight: ${props => props.theme.fonts.regular};
    }
    a{
        text-decoration: underline;
        font-size: 14px;
        color: ${props => props.theme.colors.textPrimary};
    }
`;

export const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Description = styled.p`
        padding: 20px 20px 0 20px;
        text-align: center;
`;

export const Languages = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    margin-top: 22px;
`;