import { createSelector } from 'reselect';

const selectDirectoryData = state => state.directory;

export const selectDirectoryCollections = createSelector(
    [selectDirectoryData],
    (directory) => directory.sections
);
