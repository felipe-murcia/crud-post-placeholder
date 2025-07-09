// src/App.test.jsx
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
// Este mock evita errores si Post hace llamadas o tiene lógica más compleja
//jest.mock('./page/Post/Views/Index', () => () => <div>Componente Post</div>)

test('renderiza App con el componente Post', () => {
    
   const { container } = render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );
    expect(container).toBeTruthy();
})
