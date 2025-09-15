// packages/app/src/Scaffolder/MyScaffolderPage.tsx
import { ScaffolderPage } from '@backstage/plugin-scaffolder';
import { CustomReviewStep } from './CustomReviewStep';

export const MyScaffolderPage = () => (
  <ScaffolderPage
    components={{
      ReviewStepComponent: CustomReviewStep,
    }}
  />
);
