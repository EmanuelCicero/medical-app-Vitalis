import { render , fireEvent} from "@testing-library/react-native";
import NavBar from "../navBar"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



describe("navegação e cor dos icones", () => {

    const mockNavigation = {
        navigate: jest.fn(),
      };
    
      const mockRouteMain = { name: 'Main' };
      const mockRouteDoctors = { name: 'Doctors' };
      const mockRouteProfile = { name: 'Perfil' };

    it('navega para tela principal e altera a cor do ícone', () => {
        const { getByTestId  } = render(
          <NavigationContainer>
            <NavBar navigation={mockNavigation} route={mockRouteMain} />
          </NavigationContainer>
        );
    
        const mainIconButton = getByTestId('screenMain');
        const mainIcon = mainIconButton.findByType(MaterialCommunityIcons); 
        expect(mainIcon.props.color).toBe('#4D9B91');
    
        fireEvent.press(getByTestId('screenMain'));
    
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Main'); 
      });

    it('navega para tela doctors e altera a cor do ícone', () => {
      const { getByTestId  } = render(
        <NavigationContainer>
          <NavBar navigation={mockNavigation} route={mockRouteDoctors} />
        </NavigationContainer>
      );
  
      const mainIconButton = getByTestId('screenDoctors');
      const mainIcon = mainIconButton.findByType(MaterialCommunityIcons); 
      expect(mainIcon.props.color).toBe('#4D9B91');
  
      fireEvent.press(getByTestId('screenDoctors'));
  
      expect(mockNavigation.navigate).toHaveBeenCalledWith('Doctors'); 
    });

      it('navega para tela perfil e altera a cor do ícone', () => {
        const { getByTestId  } = render(
          <NavigationContainer>
            <NavBar navigation={mockNavigation} route={mockRouteProfile} />
          </NavigationContainer>
        );
    
        const mainIconButton = getByTestId('screenProfile');
        const mainIcon = mainIconButton.findByType(MaterialCommunityIcons); 
        expect(mainIcon.props.color).toBe('#4D9B91');
    
        fireEvent.press(getByTestId('screenProfile'));
    
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Perfil'); 
      });

})