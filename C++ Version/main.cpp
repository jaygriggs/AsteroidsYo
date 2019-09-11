#include "Game.h"

TextureManager *texture_manager;
SoundManager *sound_manager;
FontManager *font_manager;
KeyManager *key_manager;
GameState* game_state; 
Render *render;
Landscape * landscape;
GUI *gui;
ExplodedAsteroid *exploded_asteroid;
Ships * ships[SHIP_MAX];

int main(){ 

	srand(static_cast<unsigned int>(time(nullptr)));

    Game game;

    while(!game.Quit())
        game.Run();  

    SDL_Quit();
    romfsExit();
    return 0;
}
