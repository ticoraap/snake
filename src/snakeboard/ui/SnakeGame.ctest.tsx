import React from 'react';
import { mount } from '@cypress/react';
import { GAME_TICK_SPEED } from '../domain/constants/GameTickSpeed';
import { SnakeGame } from './SnakeGame';
import SettingsProvider from '../domain/settingsStore';

it('starts the game with a default board size of 10 by 10', () => {
    mount(<SettingsProvider><SnakeGame /></SettingsProvider>);

    cy.findAllByLabelText(/^column [0-9]/i).should('have.length', 10)
    cy.findAllByLabelText(/^column [0-9]/i).each((row) => {
        cy.wrap(row.children()).should('have.length', 10)
    })
});

it('starts the game with the snake in the center of the board', () => {
    mount(<SettingsProvider><SnakeGame /></SettingsProvider>);

    cy.findByLabelText(/snake: column 5 row 5/i).should('exist');
});

it('moves the snake one tile in the default direction after one game tick', () => {
    cy.clock();

    mount(<SettingsProvider><SnakeGame /></SettingsProvider>);
    cy.get('body').type(' ');
    cy.findByLabelText(/snake: column 5 row 5/i).should('exist');
    cy.tick(GAME_TICK_SPEED);
    cy.findByLabelText(/snake: column 5 row 4/i).should('exist');
});

it('moves the snake in a circle when the right, down, left and up arrows are pressed ', () => {
    cy.clock();

    mount(<SettingsProvider><SnakeGame /></SettingsProvider>);
    cy.get('body').type(' ');

    cy.findByLabelText(/snake: column 5 row 5/i).should('exist');

    cy.get('body').type('{rightArrow}');
    cy.tick(GAME_TICK_SPEED);
    cy.findByLabelText(/snake: column 6 row 5/i).should('exist');

    cy.get('body').type('{downArrow}');
    cy.tick(GAME_TICK_SPEED);
    cy.findByLabelText(/snake: column 6 row 6/i).should('exist');

    cy.get('body').type('{leftArrow}');
    cy.tick(GAME_TICK_SPEED);
    cy.findByLabelText(/snake: column 5 row 6/i).should('exist');

    cy.get('body').type('{upArrow}');
    cy.tick(GAME_TICK_SPEED);
    cy.findByLabelText(/snake: column 5 row 5/i).should('exist');
});

it('displays food on a random location');

it('grows the snake one tile when food is eaten by the snake', () => {
    cy.clock();

    mount(<SettingsProvider><SnakeGame /></SettingsProvider>);
    cy.get('body').type(' ');

    cy.findByLabelText(/snake: column 5 row 5/i).should('exist');

    cy.get('body').type('{leftArrow}');
    cy.tick(GAME_TICK_SPEED);
    cy.findByLabelText(/snake: column 5 row 5/i).should('exist');
    cy.findByLabelText(/snake: column 4 row 5/i).should('exist');
});

it('wins the game when all food is eaten'); // move in a circle? or up and down

it('does not display food on the position of the snake');

it('displays new food when food is eaten');




it('restarts the game when the snake hits a wall');

it('restarts the game when the snake hits itself');