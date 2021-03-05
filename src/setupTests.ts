import '@testing-library/jest-dom';
import 'test_utils/test-server';
import { IntersectionObserver } from '__mocks__/IntersectionObserver.mock';

global.IntersectionObserver = IntersectionObserver;
