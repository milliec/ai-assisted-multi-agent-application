// The fictional fund's 2027 reporting calendar: 22 due dates.
//
// Source: the capstone's answer key,
// project-context/1.define/mock-data/expected-obligation-library.md, section 4.
// If the answer key changes, update this file to match. Nothing here is invented.

// Plain-language names for each report (the IDs are the capstone's own).
export const reportNames: Record<string, string> = {
  'OBL-01': 'Monthly report',
  'OBL-02': 'Fund tax',
  'OBL-03': 'Annual report',
  'OBL-04': 'Spain report',
  'OBL-05': 'Ownership update',
};

export interface DueDate {
  id: string;   // which report
  date: string; // the final due date, as shown to readers
  // 'moved'       = fell on a weekend, so moved to the next working day
  // 'unconfirmed' = fell on a weekend, but the moving rule isn't confirmed yet,
  //                 so the earlier date is kept (filing early is safe, late is not)
  status?: 'moved' | 'unconfirmed';
}

// One list per month, January to December. Order within a month sets the
// stacking order of the dots in the chart (bottom to top).
export const calendar2027: DueDate[][] = [
  [{ id: 'OBL-01', date: '11 Jan', status: 'moved' }, { id: 'OBL-02', date: '20 Jan' }],
  [{ id: 'OBL-01', date: '10 Feb' }, { id: 'OBL-05', date: '28 Feb', status: 'unconfirmed' }, { id: 'OBL-04', date: '28 Feb', status: 'unconfirmed' }],
  [{ id: 'OBL-01', date: '10 Mar' }],
  [{ id: 'OBL-01', date: '12 Apr', status: 'moved' }, { id: 'OBL-02', date: '20 Apr' }],
  [{ id: 'OBL-01', date: '10 May' }, { id: 'OBL-04', date: '31 May' }],
  [{ id: 'OBL-01', date: '10 Jun' }, { id: 'OBL-03', date: '30 Jun' }],
  [{ id: 'OBL-01', date: '12 Jul', status: 'moved' }, { id: 'OBL-02', date: '20 Jul' }],
  [{ id: 'OBL-01', date: '10 Aug' }, { id: 'OBL-04', date: '31 Aug' }],
  [{ id: 'OBL-01', date: '10 Sep' }],
  [{ id: 'OBL-01', date: '11 Oct', status: 'moved' }, { id: 'OBL-02', date: '20 Oct' }],
  [{ id: 'OBL-01', date: '10 Nov' }, { id: 'OBL-04', date: '30 Nov' }],
  [{ id: 'OBL-01', date: '10 Dec' }],
];
