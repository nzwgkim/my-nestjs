import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'This will return all movies';
    }
    
    @Get('/:id')
    getOne(@Param('id') moveId:string){
        return `This will return ONE movie with the id: ${moveId}.`;
    }

    @Post()
    create(){
        return `This will create a movie`
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return  `This will delete a movie of ${movieId}`
    }

    @Patch('/:id')
    patch(@Param('id') movieID:string){
        return `This will patch from the id: ${movieID}`
    }

}
