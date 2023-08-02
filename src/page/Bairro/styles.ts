import styled from 'styled-components'

export const Container = styled.div``
export const Content = styled.div`
  form {
    width: 27rem;
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 8px;
    h2 {
      margin-bottom: 3rem;
    }
    select {
      width: 100%;
      padding: 0.75rem;
      border-radius: 8px;
      margin-top: 0.5rem;
    }
    button {
      margin-top: 1rem;
      height: 3rem;
      padding: 1rem;
      border: none;
      border-radius: 8px;
      color: #fff;
      background: #f44159;
      &:hover {
        background: #ff5841;
      }
    }
  }
`
