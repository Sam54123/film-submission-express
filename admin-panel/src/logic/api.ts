import axios from 'axios';
import { FilmInfo } from 'fse-shared/src/meta';

/**
 * Handles interfacing with the FSE central API.
 */
export module api {
    export const client = axios.create({ timeout: 1000 })

    export async function getFilms() {
        const response = await client.get('/api/films')
        if (response.status != 200) {
            throw new Error(`HTTP request returned code ${response.status} (${response.statusText})`)
        }
        return response.data as Record<string, FilmInfo>
    }
}