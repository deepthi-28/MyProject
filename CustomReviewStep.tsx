// packages/app/src/Scaffolder/CustomReviewStep.tsx
import React from 'react';
import { ReviewStepProps } from '@backstage/plugin-scaffolder-react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

interface MyFormData {
  name?: string;
  myFile?: { name?: string };
  [key: string]: any; // fallback for other dynamic values
}

export const CustomReviewStep = ({ formData }: ReviewStepProps) => {
  const data = formData as MyFormData;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        🚀 Review Your Inputs
      </Typography>

      {/* Custom message for "name" */}
      <Card style={{ marginBottom: 16 }}>
        <CardContent>
          <Typography variant="subtitle1" color="primary">
            Service Name
          </Typography>
          <Typography variant="body1">
            {data?.name
              ? `✅ You entered a valid kebab-case name: ${data.name}`
              : '⚠ No name provided'}
          </Typography>
        </CardContent>
      </Card>

      {/* Custom message for file */}
      {data?.myFile && (
        <Card style={{ marginBottom: 16 }}>
          <CardContent>
            <Typography variant="subtitle1" color="primary">
              Uploaded File
            </Typography>
            <Typography variant="body1">
              📁 File received: <b>{data.myFile?.name || 'Unknown file'}</b>
              <br />
              (Content hidden for security)
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Dynamically render other values */}
      {Object.entries(data || {})
        .filter(([key]) => key !== 'name' && key !== 'myFile')
        .map(([key, value]) => (
          <div key={key} style={{ marginBottom: 12 }}>
            <Divider />
            <Typography variant="subtitle2">{key}</Typography>
            <Typography variant="body2">{String(value)}</Typography>
          </div>
        ))}
    </div>
  );
};
