import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList";

interface GameCardProps{
    game: Game;
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconsList  platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard