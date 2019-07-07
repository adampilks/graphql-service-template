import { RESTDataSource } from 'apollo-datasource-rest';

const people = [
  { id: '1', name: 'Jurgen' },
  { id: '2', name: 'Divock' },
  { id: '3', name: 'Mo' },
];

export type PeopleApiPerson = {
  id: string;
  name: string;
};

export class PersonAPI extends RESTDataSource {
  constructor() {
    super();

    // this sets the base url for all subsequent requests
    this.baseURL = 'http://some-endpoint-from-configuration-files.local:8080';
  }

  //  below is the api for this datasource
  async getPeople(): Promise<Array<PeopleApiPerson>> {
    /**
     * Here you would likely do some async request to the above configured endpoint to get data  e.g
     *
     * return this.get('people/all')
     *
     * But for now lets get some fake data
     *
     * */
    return people;
  }

  async getPersonById(id: string): Promise<PeopleApiPerson | null> {
    /**
     * return this.get(`people/${id}`)
     * */

    return people.find(p => p.id === id) || null;
  }
}
