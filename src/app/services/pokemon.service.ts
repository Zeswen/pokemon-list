import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(id: number) {
    const url = `${API_URL}/pokemon/${id}`;
    return this.http.get(url);
  }
}
