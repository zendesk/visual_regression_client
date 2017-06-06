import { schema } from 'normalizr';

const Project = new schema.Entity('project', {}, { idAttribute: 'title' });

export default Project;