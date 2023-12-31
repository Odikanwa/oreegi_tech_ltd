/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const DropdownContext = createContext({});

const DropdownContextProvider = ({children}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <DropdownContext.Provider value={{dropdownOpen, setDropdownOpen}}>
            {children}
        </DropdownContext.Provider>
    )
}

export const useDropdownContext = () => {
    const context = useContext(DropdownContext);
    if(!context) {
        throw new Error("useDropdownContext can be used within a DropdownContextProvider")
    }

    return context;

}

export default DropdownContextProvider;





// export const useDropdownContext = () => {
//     return useContext(DropdownContext)
// }

// export const useModalContext = () => {
//     return useContext(ModalContext)
// }

// // eslint-disable-next-line react/prop-types
// export const ContextProvider = ({children}) => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [modalOpen, setModalOpen] = useState(false);

//     const toggleModal = () => {
//         setModalOpen(!modalOpen)
//     }

//     return (
//         <ModalContext.Provider value={{modalOpen, setModalOpen}}>
//             <DropdownContext.Provider value={{dropdownOpen, setDropdownOpen, toggleModal}}>
//                 {children}
//             </DropdownContext.Provider>
//         </ModalContext.Provider>
//     )
// }

// const ThemeContext = createContext()
// const ThemeUpdateContext = createContext()

// export function useTheme() {
//     return useContext(ThemeContext)
// }

// export function useThemeUpdate(){
//     return useContext(ThemeUpdateContext)
// }

// export function ThemeProvider({ children }) {
//     const [darktheme, setDarktheme] = useState(true)
    
//     function toggletheme() {
//         setDarktheme(prevDarkTheme => !prevDarkTheme)
//     }

//     return (
//         <ThemeContext.Provider value={darkTheme}>
//             <ThemeUpdateContext.Provider value={toggleTheme}>
//                 {children}
//             </ThemeUpdateContext.Provider>
//         </ThemeContext.Provider>
//     )
// }