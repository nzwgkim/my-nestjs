import { Body, ConfigurableModuleBuilder, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'This will return all movies';
    }

    @Get('search')
    search(@Query('year') seachingYear: string) {
      return `We are searching for a movie made after: ${seachingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') moveId:string){
        return `This will return ONE movie with the id: ${moveId}.`;
    }

    @Post()
    create(@Body() movieDate){
        console.log(movieDate);
        return movieDate;
    }

    @Delete(':id')
    remove(@Param('id') movieId:string){
        return  `This will delete a movie of ${movieId}`
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
