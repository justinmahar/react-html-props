import React from 'react';
import { ExampleComponent } from '../components/ExampleComponent';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
};

// The named exports define the stories
export const ExampleComponentStory = () => <ExampleComponent />;
ExampleComponentStory.story = {
  name: 'ExampleComponent',
};
