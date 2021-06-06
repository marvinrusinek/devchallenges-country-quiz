import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../models/country.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  countries: Country[] = [];

  constructor(private http: HttpClient) {}

  getCountries(): Promise<any> {
    const url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(url).toPromise();
  }

  async getQuestion(): Promise<Question> {
    if (this.countries.length === 0) {
      this.countries = await this.getCountries();
    }

    const countryArr = this.getRandomSubset(this.countries, 4);
    const answerIndex = this.getRandomInt(0, 4);
    return this.getRandomInt(0, 10) % 2 === 0
              ? this.setCapitalQuestion(countryArr, answerIndex)
              : this.setFlagQuestion(countryArr, answerIndex);
  }

  getRandomSubset(countries: Country[], count: number): Country[] {
    const countryArr: Country[] = [];

    while (countryArr.length < count) {
      const i = this.getRandomInt(0, countries.length);
      const country = countries[i];
      if (countryArr.indexOf(country) === -1) {
        countryArr.push(country);
      }
    }

    return countryArr;
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  setCapitalQuestion(countryArr: any[], answerIndex: number): Question {
    const question: Question = {
      flag: '',
      text: `${countryArr[answerIndex].capital} is the capital of`,
      options: [] as any[],
      answer: answerIndex
    };

    countryArr.forEach(country => {
      question.options.push(country.name);
    });

    return question;
  }

  setFlagQuestion(countryArr: any[], answerIndex: number): Question {
    const question: Question = {
      flag: countryArr[answerIndex].flag,
      text: `Which country does this flag belong to?`,
      options: [] as any[],
      answer: answerIndex
    };

    countryArr.forEach(country => {
      question.options.push(country.name);
    });

    return question;
  }
}
