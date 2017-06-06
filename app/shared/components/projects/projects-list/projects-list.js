import React from 'react';
import { Link } from 'react-router-dom';
import EmptyList from 'shared/components/empty-list';
import styles from './projects-list.scss';

const ProjectsList = ({ projects = [] }) => (
  <div>
    {projects.length === 0 && <EmptyList>There's nothing here</EmptyList>}
    {projects.length && (
      <ul className={styles.list}>
        {
          projects.map(project => (
            <li key={project.title} className={styles.item}>
              <Link to={`/projects/${project.title}`} className={styles.link}>{project.title}</Link>
            </li>
          ))
        }
      </ul>
    )}
  </div>
);

export default ProjectsList;