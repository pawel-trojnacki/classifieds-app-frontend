import '@testing-library/jest-dom';
import 'test_utils/test-server';
import { IntersectionObserver } from 'mocks/IntersectionObserver.mock';

global.IntersectionObserver = IntersectionObserver;
