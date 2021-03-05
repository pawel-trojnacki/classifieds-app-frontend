import '@testing-library/jest-dom';
import 'test_utils/test-server';
import { IntersectionObserver } from 'test_utils/mocks/IntersectionObserver.mock';

global.IntersectionObserver = IntersectionObserver;
