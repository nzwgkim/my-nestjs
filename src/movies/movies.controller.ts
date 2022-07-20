import { Body, ConfigurableModuleBuilder, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:MoviesService){

    }
    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    // @Get('search')
    // search(@Query('year') seachingYear: string) {
    //   return `We are searching for a movie made after: ${seachingYear}`;
    // }

    @Get(':id')
    getOne(@Param('id') moveId:string): Movie{
        return this.moviesService.getOne(moveId);
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieID:string, @Body() updateData){
        console.log(movieID);
        return {
            updatedMovie: movieID,
            ...updateData,
        };
    }
}
