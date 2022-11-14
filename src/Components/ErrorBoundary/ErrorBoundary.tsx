import React from "react";
import {Box} from "@mui/material";

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component <IErrorBoundaryProps, IErrorBoundaryState>{
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true };
  }

  style = {
    color: 'red',
    border: '1px solid red',
    borderRadius: '0.25rem',
    margin: '0.5rem',
    padding: '0.5rem'
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Box style={this.style}>Something went wrong.</Box>;
    }
    return this.props.children;
  }
}
