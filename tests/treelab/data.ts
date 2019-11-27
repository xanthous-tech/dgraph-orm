export const data = {
  data: {
    allColumnData: [
      {
        uid: '0x11955',
        name: 'Notes',
        columnType: 'TEXT',
        isDefault: false,
        has_rollup_update: [
          {
            uid: '0x1196c',
            name: 'Rollup NOtes',
            columnType: 'ROLLUP',
            isDefault: false,
            formula: '$column_value_0x11955',
            recordReferenceColumnId: '0x1196a',
            has_rollup_update: [
              {
                uid: '0x11998',
                name: 'Rollup ROllup',
                columnType: 'ROLLUP',
                isDefault: false,
                formula: '$column_value_0x1196c',
                recordReferenceColumnId: '0x11997',
                has_foreign_lookup_column: [
                  {
                    uid: '0x1196c',
                    name: 'Rollup NOtes',
                    columnType: 'ROLLUP',
                    isDefault: false,
                    formula: '$column_value_0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                has_record_reference_column: [
                  {
                    uid: '0x11997',
                    name: 'Table 2',
                    columnType: 'RECORD_REFERENCE',
                    isDefault: false,
                    foreignWorkspaceId: '0x124',
                    foreignCoreId: '0x11951',
                    foreignTableId: '0x11961',
                    oneToOne: false,
                    symmetricColumnId: '0x11964',
                    has_foreign_workspace: [
                      {
                        uid: '0x124',
                        name: 'Caminer'
                      }
                    ],
                    has_foreign_core: [
                      {
                        'has_table|order': 0,
                        color: 'blue',
                        icon: 'untitle',
                        uid: '0x11951',
                        name: 'Test'
                      }
                    ],
                    has_foreign_table: [
                      {
                        has_column: [
                          {
                            uid: '0x11963',
                            name: 'Name',
                            columnType: 'FORMULA',
                            isDefault: true,
                            formula: '$column_value_0x1196a'
                          },
                          {
                            uid: '0x11964',
                            name: 'Tabl 3',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x1198f',
                            oneToOne: false,
                            symmetricColumnId: '0x11997'
                          },
                          {
                            uid: '0x1196a',
                            name: 'Default',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11952',
                            oneToOne: false,
                            symmetricColumnId: '0x11969'
                          },
                          {
                            uid: '0x1196b',
                            name: 'Lookup Notes',
                            columnType: 'LOOKUP',
                            isDefault: false,
                            foreignLookupColumnId: '0x11955',
                            recordReferenceColumnId: '0x1196a'
                          },
                          {
                            uid: '0x1196c',
                            name: 'Rollup NOtes',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: '$column_value_0x11955',
                            recordReferenceColumnId: '0x1196a'
                          },
                          {
                            uid: '0x1198b',
                            name: 'FOrmula2',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x1196c & "Whoa"'
                          },
                          {
                            uid: '0x119d4',
                            name: 'Sum Rollup',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: 'SUM($column_value_0x119cc)',
                            recordReferenceColumnId: '0x1196a'
                          }
                        ],
                        has_view: [
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x11963',
                                name: 'Name',
                                columnType: 'FORMULA',
                                isDefault: true,
                                formula: '$column_value_0x1196a',
                                'has_column|order': 0
                              },
                              {
                                uid: '0x11964',
                                name: 'Tabl 3',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x11951',
                                foreignTableId: '0x1198f',
                                oneToOne: false,
                                symmetricColumnId: '0x11997',
                                'has_column|order': 1
                              },
                              {
                                uid: '0x1196a',
                                name: 'Default',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x11951',
                                foreignTableId: '0x11952',
                                oneToOne: false,
                                symmetricColumnId: '0x11969',
                                'has_column|order': 3
                              },
                              {
                                uid: '0x1196b',
                                name: 'Lookup Notes',
                                columnType: 'LOOKUP',
                                isDefault: false,
                                foreignLookupColumnId: '0x11955',
                                recordReferenceColumnId: '0x1196a',
                                'has_column|order': 4
                              },
                              {
                                uid: '0x1196c',
                                name: 'Rollup NOtes',
                                columnType: 'ROLLUP',
                                isDefault: false,
                                formula: '$column_value_0x11955',
                                recordReferenceColumnId: '0x1196a',
                                'has_column|order': 5
                              },
                              {
                                uid: '0x1198b',
                                name: 'FOrmula2',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x1196c & "Whoa"',
                                'has_column|order': 6
                              },
                              {
                                uid: '0x119d4',
                                name: 'Sum Rollup',
                                columnType: 'ROLLUP',
                                isDefault: false,
                                formula: 'SUM($column_value_0x119cc)',
                                recordReferenceColumnId: '0x1196a',
                                'has_column|order': 7
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x11966',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x11967',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x11968',
                                'has_row|order': 3
                              }
                            ],
                            uid: '0x11962',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_view|order': 0
                          }
                        ],
                        has_row: [
                          {
                            uid: '0x11966',
                            has_cell: [
                              {
                                uid: '0x1196d',
                                isDefault: false,
                                rowId: '0x11966',
                                columnId: '0x1196c',
                                cellType: 'ROLLUP',
                                result: 'asdf, 2323, e, f, g'
                              },
                              {
                                uid: '0x1197d',
                                isDefault: false,
                                rowId: '0x11966',
                                columnId: '0x1196a',
                                cellType: 'RECORD_REFERENCE'
                              },
                              {
                                uid: '0x1197e',
                                isDefault: false,
                                rowId: '0x11966',
                                columnId: '0x1196b',
                                cellType: 'LOOKUP'
                              },
                              {
                                uid: '0x11980',
                                isDefault: true,
                                rowId: '0x11966',
                                columnId: '0x11963',
                                cellType: 'FORMULA',
                                result: 'Whoa, Whoa2, Whoa3, Whoa, Whoa5'
                              },
                              {
                                uid: '0x1198c',
                                isDefault: false,
                                rowId: '0x11966',
                                columnId: '0x1198b',
                                cellType: 'FORMULA',
                                result: 'asdf, 2323, e, f, gWhoa'
                              },
                              {
                                uid: '0x1199d',
                                isDefault: false,
                                rowId: '0x11966',
                                columnId: '0x11964',
                                cellType: 'RECORD_REFERENCE'
                              },
                              {
                                uid: '0x119d5',
                                isDefault: false,
                                rowId: '0x11966',
                                columnId: '0x119d4',
                                cellType: 'ROLLUP',
                                result: '6042'
                              }
                            ]
                          },
                          {
                            uid: '0x11967',
                            has_cell: [
                              {
                                uid: '0x1196e',
                                isDefault: false,
                                rowId: '0x11967',
                                columnId: '0x1196c',
                                cellType: 'ROLLUP',
                                result: '2323, e, h'
                              },
                              {
                                uid: '0x11981',
                                isDefault: true,
                                rowId: '0x11967',
                                columnId: '0x11963',
                                cellType: 'FORMULA',
                                result: 'bc, d, adf'
                              },
                              {
                                uid: '0x11984',
                                isDefault: false,
                                rowId: '0x11967',
                                columnId: '0x1196a',
                                cellType: 'RECORD_REFERENCE'
                              },
                              {
                                uid: '0x11985',
                                isDefault: false,
                                rowId: '0x11967',
                                columnId: '0x1196b',
                                cellType: 'LOOKUP'
                              },
                              {
                                uid: '0x1198d',
                                isDefault: false,
                                rowId: '0x11967',
                                columnId: '0x1198b',
                                cellType: 'FORMULA',
                                result: '2323, e, hWhoa'
                              },
                              {
                                uid: '0x119a0',
                                isDefault: false,
                                rowId: '0x11967',
                                columnId: '0x11964',
                                cellType: 'RECORD_REFERENCE'
                              },
                              {
                                uid: '0x119d6',
                                isDefault: false,
                                rowId: '0x11967',
                                columnId: '0x119d4',
                                cellType: 'ROLLUP',
                                result: '145'
                              }
                            ]
                          },
                          {
                            uid: '0x11968',
                            has_cell: [
                              {
                                uid: '0x1196f',
                                isDefault: false,
                                rowId: '0x11968',
                                columnId: '0x1196c',
                                cellType: 'ROLLUP',
                                result: 'f'
                              },
                              {
                                uid: '0x11982',
                                isDefault: true,
                                rowId: '0x11968',
                                columnId: '0x11963',
                                cellType: 'FORMULA',
                                result: 'asdf'
                              },
                              {
                                uid: '0x11987',
                                isDefault: false,
                                rowId: '0x11968',
                                columnId: '0x1196a',
                                cellType: 'RECORD_REFERENCE'
                              },
                              {
                                uid: '0x11988',
                                isDefault: false,
                                rowId: '0x11968',
                                columnId: '0x1196b',
                                cellType: 'LOOKUP'
                              },
                              {
                                uid: '0x1198e',
                                isDefault: false,
                                rowId: '0x11968',
                                columnId: '0x1198b',
                                cellType: 'FORMULA',
                                result: 'fWhoa'
                              },
                              {
                                uid: '0x119d7',
                                isDefault: false,
                                rowId: '0x11968',
                                columnId: '0x119d4',
                                cellType: 'ROLLUP',
                                result: '312'
                              }
                            ]
                          }
                        ],
                        from_core: [
                          {
                            'has_table|order': 0,
                            color: 'blue',
                            icon: 'untitle',
                            uid: '0x11951',
                            name: 'Test'
                          }
                        ],
                        uid: '0x11961',
                        name: 'Table 2',
                        has_user_group: [
                          {
                            color: 'N/A',
                            icon: 'N/A',
                            uid: '0x126',
                            name: 'Admin',
                            role: 'ADMIN'
                          }
                        ]
                      }
                    ],
                    has_symmetric_column: [
                      {
                        uid: '0x11964',
                        name: 'Tabl 3',
                        columnType: 'RECORD_REFERENCE',
                        isDefault: false,
                        foreignWorkspaceId: '0x124',
                        foreignCoreId: '0x11951',
                        foreignTableId: '0x1198f',
                        oneToOne: false,
                        symmetricColumnId: '0x11997',
                        has_foreign_workspace: [
                          {
                            uid: '0x124',
                            name: 'Caminer'
                          }
                        ],
                        has_foreign_core: [
                          {
                            'has_table|order': 0,
                            color: 'blue',
                            icon: 'untitle',
                            uid: '0x11951',
                            name: 'Test'
                          }
                        ],
                        has_foreign_table: [
                          {
                            'has_view|order': 0,
                            uid: '0x1198f',
                            name: 'Table 3'
                          }
                        ],
                        has_symmetric_column: [
                          {
                            uid: '0x11997',
                            name: 'Table 2',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x11964'
                          }
                        ],
                        has_cell: [
                          {
                            uid: '0x1199d',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x11964',
                                name: 'Tabl 3',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x11951',
                                foreignTableId: '0x1198f',
                                oneToOne: false,
                                symmetricColumnId: '0x11997'
                              }
                            ],
                            rowId: '0x11966',
                            columnId: '0x11964',
                            has_foreign_row: [
                              {
                                uid: '0x11994'
                              },
                              {
                                uid: '0x11995'
                              },
                              {
                                uid: '0x11996'
                              }
                            ],
                            cellType: 'RECORD_REFERENCE'
                          },
                          {
                            uid: '0x119a0',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x11964',
                                name: 'Tabl 3',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x11951',
                                foreignTableId: '0x1198f',
                                oneToOne: false,
                                symmetricColumnId: '0x11997'
                              }
                            ],
                            rowId: '0x11967',
                            columnId: '0x11964',
                            has_foreign_row: [
                              {
                                uid: '0x11996'
                              }
                            ],
                            cellType: 'RECORD_REFERENCE'
                          }
                        ]
                      }
                    ],
                    has_lookup_column: [
                      {
                        uid: '0x119a5',
                        name: 'Lookup lookup',
                        columnType: 'LOOKUP',
                        isDefault: false,
                        foreignLookupColumnId: '0x1196b',
                        recordReferenceColumnId: '0x11997'
                      }
                    ],
                    has_rollup_column: [
                      {
                        uid: '0x11998',
                        name: 'Rollup ROllup',
                        columnType: 'ROLLUP',
                        isDefault: false,
                        formula: '$column_value_0x1196c',
                        recordReferenceColumnId: '0x11997'
                      },
                      {
                        uid: '0x119d8',
                        name: 'Sum of Sum of ROllup',
                        columnType: 'ROLLUP',
                        isDefault: false,
                        formula: 'SUM($column_value_0x119d4)',
                        recordReferenceColumnId: '0x11997',
                        has_foreign_lookup_column: [
                          {
                            uid: '0x119d4',
                            name: 'Sum Rollup',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: 'SUM($column_value_0x119cc)',
                            recordReferenceColumnId: '0x1196a'
                          }
                        ],
                        has_record_reference_column: [
                          {
                            uid: '0x11997',
                            name: 'Table 2',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x11964'
                          }
                        ],
                        from_formula_column: [
                          {
                            uid: '0x119dc',
                            name: 'rollup + 10',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x119d8+10',
                            from_formula_column: [
                              {
                                uid: '0x119e0',
                                name: 'Formula of formula',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x119dc & "WGia"'
                              }
                            ],
                            has_cell: [
                              {
                                uid: '0x119dd',
                                isDefault: false,
                                from_column: [
                                  {
                                    uid: '0x119dc',
                                    name: 'rollup + 10',
                                    columnType: 'FORMULA',
                                    isDefault: false,
                                    formula: '$column_value_0x119d8+10'
                                  }
                                ],
                                rowId: '0x11994',
                                columnId: '0x119dc',
                                cellType: 'FORMULA',
                                result: '6052'
                              },
                              {
                                uid: '0x119de',
                                isDefault: false,
                                from_column: [
                                  {
                                    uid: '0x119dc',
                                    name: 'rollup + 10',
                                    columnType: 'FORMULA',
                                    isDefault: false,
                                    formula: '$column_value_0x119d8+10'
                                  }
                                ],
                                rowId: '0x11995',
                                columnId: '0x119dc',
                                cellType: 'FORMULA',
                                result: '6052'
                              },
                              {
                                uid: '0x119df',
                                isDefault: false,
                                from_column: [
                                  {
                                    uid: '0x119dc',
                                    name: 'rollup + 10',
                                    columnType: 'FORMULA',
                                    isDefault: false,
                                    formula: '$column_value_0x119d8+10'
                                  }
                                ],
                                rowId: '0x11996',
                                columnId: '0x119dc',
                                cellType: 'FORMULA',
                                result: '6197'
                              }
                            ]
                          }
                        ],
                        has_cell: [
                          {
                            uid: '0x119d9',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119d8',
                                name: 'Sum of Sum of ROllup',
                                columnType: 'ROLLUP',
                                isDefault: false,
                                formula: 'SUM($column_value_0x119d4)',
                                recordReferenceColumnId: '0x11997'
                              }
                            ],
                            rowId: '0x11994',
                            columnId: '0x119d8',
                            cellType: 'ROLLUP',
                            result: '6042'
                          },
                          {
                            uid: '0x119da',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119d8',
                                name: 'Sum of Sum of ROllup',
                                columnType: 'ROLLUP',
                                isDefault: false,
                                formula: 'SUM($column_value_0x119d4)',
                                recordReferenceColumnId: '0x11997'
                              }
                            ],
                            rowId: '0x11995',
                            columnId: '0x119d8',
                            cellType: 'ROLLUP',
                            result: '6042'
                          },
                          {
                            uid: '0x119db',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119d8',
                                name: 'Sum of Sum of ROllup',
                                columnType: 'ROLLUP',
                                isDefault: false,
                                formula: 'SUM($column_value_0x119d4)',
                                recordReferenceColumnId: '0x11997'
                              }
                            ],
                            rowId: '0x11996',
                            columnId: '0x119d8',
                            cellType: 'ROLLUP',
                            result: '6187'
                          }
                        ]
                      }
                    ],
                    has_cell: [
                      {
                        uid: '0x1199c',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11997',
                            name: 'Table 2',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x11964'
                          }
                        ],
                        rowId: '0x11994',
                        columnId: '0x11997',
                        has_foreign_row: [
                          {
                            uid: '0x11966'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      },
                      {
                        uid: '0x1199e',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11997',
                            name: 'Table 2',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x11964'
                          }
                        ],
                        rowId: '0x11995',
                        columnId: '0x11997',
                        has_foreign_row: [
                          {
                            uid: '0x11966'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      },
                      {
                        uid: '0x1199f',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11997',
                            name: 'Table 2',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x11964'
                          }
                        ],
                        rowId: '0x11996',
                        columnId: '0x11997',
                        has_foreign_row: [
                          {
                            uid: '0x11966'
                          },
                          {
                            uid: '0x11967'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      }
                    ]
                  }
                ],
                from_formula_column: [
                  {
                    uid: '0x119a1',
                    name: 'Formula a Rollup',
                    columnType: 'FORMULA',
                    isDefault: false,
                    formula: '$column_value_0x11998 & "Second Layer"',
                    has_cell: [
                      {
                        uid: '0x119a2',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x119a1',
                            name: 'Formula a Rollup',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x11998 & "Second Layer"'
                          }
                        ],
                        rowId: '0x11994',
                        columnId: '0x119a1',
                        cellType: 'FORMULA',
                        result: 'asdf, 2323, e, f, gSecond Layer'
                      },
                      {
                        uid: '0x119a3',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x119a1',
                            name: 'Formula a Rollup',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x11998 & "Second Layer"'
                          }
                        ],
                        rowId: '0x11995',
                        columnId: '0x119a1',
                        cellType: 'FORMULA',
                        result: 'asdf, 2323, e, f, gSecond Layer'
                      },
                      {
                        uid: '0x119a4',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x119a1',
                            name: 'Formula a Rollup',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x11998 & "Second Layer"'
                          }
                        ],
                        rowId: '0x11996',
                        columnId: '0x119a1',
                        cellType: 'FORMULA',
                        result: 'asdf, 2323, e, f, g, 2323, e, hSecond Layer'
                      }
                    ]
                  }
                ],
                has_cell: [
                  {
                    uid: '0x11999',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x11998',
                        name: 'Rollup ROllup',
                        columnType: 'ROLLUP',
                        isDefault: false,
                        formula: '$column_value_0x1196c',
                        recordReferenceColumnId: '0x11997'
                      }
                    ],
                    rowId: '0x11994',
                    columnId: '0x11998',
                    cellType: 'ROLLUP',
                    result: 'asdf, 2323, e, f, g'
                  },
                  {
                    uid: '0x1199a',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x11998',
                        name: 'Rollup ROllup',
                        columnType: 'ROLLUP',
                        isDefault: false,
                        formula: '$column_value_0x1196c',
                        recordReferenceColumnId: '0x11997'
                      }
                    ],
                    rowId: '0x11995',
                    columnId: '0x11998',
                    cellType: 'ROLLUP',
                    result: 'asdf, 2323, e, f, g'
                  },
                  {
                    uid: '0x1199b',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x11998',
                        name: 'Rollup ROllup',
                        columnType: 'ROLLUP',
                        isDefault: false,
                        formula: '$column_value_0x1196c',
                        recordReferenceColumnId: '0x11997'
                      }
                    ],
                    rowId: '0x11996',
                    columnId: '0x11998',
                    cellType: 'ROLLUP',
                    result: 'asdf, 2323, e, f, g, 2323, e, h'
                  }
                ]
              }
            ],
            has_foreign_lookup_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            has_record_reference_column: [
              {
                uid: '0x1196a',
                name: 'Default',
                columnType: 'RECORD_REFERENCE',
                isDefault: false,
                foreignWorkspaceId: '0x124',
                foreignCoreId: '0x11951',
                foreignTableId: '0x11952',
                oneToOne: false,
                symmetricColumnId: '0x11969',
                has_foreign_workspace: [
                  {
                    has_core: [
                      {
                        has_table: [
                          {
                            has_column: [
                              {
                                uid: '0xdb39',
                                name: 'Name',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: true,
                                defaultNumber: 0,
                                has_cell: [
                                  {
                                    uid: '0xde09',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xdb3d',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 1
                                  },
                                  {
                                    uid: '0xde0a',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xdb3e',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 2
                                  },
                                  {
                                    uid: '0xde0b',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xdb3f',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 3
                                  },
                                  {
                                    uid: '0xe528',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xe527',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xe52a',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xe529',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xe52c',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xe52b',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xe52e',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xe52d',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xe530',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xe52f',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xe532',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0xe531',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x102fe',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x102fd',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10300',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x102ff',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10302',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10301',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10304',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10303',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10306',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10305',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10308',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10307',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x1030a',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10309',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x1030c',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x1030b',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x1030e',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x1030d',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10310',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x1030f',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x1031a',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10319',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x1031c',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x1031b',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10320',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x1031f',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10322',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10321',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10324',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10323',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0x10351',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0xdb39',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10350',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0xdb3a',
                                name: 'Notes',
                                columnType: 'DATETIME',
                                isDefault: false,
                                useGMT: false,
                                timeFormat: 'TWELVE_HOUR',
                                includeTime: false,
                                dateFormat: 'LOCAL',
                                has_cell: [
                                  {
                                    uid: '0xf940',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xdb3d',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '1999-12-23T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0xf941',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xe527',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2019-12-13T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0xf942',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xe529',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2018-12-23T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0xf943',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xe52b',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2018-12-13T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0xf944',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xe52d',
                                    columnId: '0xdb3a'
                                  },
                                  {
                                    uid: '0xf945',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xe52f',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2019-12-23T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0xf946',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xe531',
                                    columnId: '0xdb3a'
                                  },
                                  {
                                    uid: '0xf947',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xdb3f',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2019-10-29T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0xf948',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0xdb3a',
                                        name: 'Notes',
                                        columnType: 'DATETIME',
                                        isDefault: false,
                                        useGMT: false,
                                        timeFormat: 'TWELVE_HOUR',
                                        includeTime: false,
                                        dateFormat: 'LOCAL'
                                      }
                                    ],
                                    rowId: '0xdb3e',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2019-12-23T00:00:00+08:00'
                                  }
                                ]
                              },
                              {
                                uid: '0xdb3c',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false
                              },
                              {
                                uid: '0x1033c',
                                name: 'Test',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0x10325',
                                oneToOne: false,
                                symmetricColumnId: '0x1033d',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0xdb36',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10325',
                                    name: 'Table 2'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x1033d',
                                    name: 'Default',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0xdb36',
                                    foreignTableId: '0xdb37',
                                    oneToOne: false,
                                    symmetricColumnId: '0x1033c'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x1033e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x1033c',
                                        name: 'Test',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: false,
                                        symmetricColumnId: '0x1033d'
                                      }
                                    ],
                                    rowId: '0xdb3d',
                                    columnId: '0x1033c',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      },
                                      {
                                        uid: '0x1032b'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10343',
                                name: 'Test Unique',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0x10325',
                                oneToOne: true,
                                symmetricColumnId: '0x10344',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0xdb36',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10325',
                                    name: 'Table 2'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10344',
                                    name: 'Default (1)',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0xdb36',
                                    foreignTableId: '0xdb37',
                                    oneToOne: true,
                                    symmetricColumnId: '0x10343'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10345',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10343',
                                        name: 'Test Unique',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10344'
                                      }
                                    ],
                                    rowId: '0xdb3d',
                                    columnId: '0x10343',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      },
                                      {
                                        uid: '0x1032b'
                                      },
                                      {
                                        uid: '0x1032c'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10347',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10343',
                                        name: 'Test Unique',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10344'
                                      }
                                    ],
                                    rowId: '0xdb3e',
                                    columnId: '0x10343',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x1034a',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10343',
                                        name: 'Test Unique',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10344'
                                      }
                                    ],
                                    rowId: '0xdb3f',
                                    columnId: '0x10343',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x1034b',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10343',
                                        name: 'Test Unique',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10344'
                                      }
                                    ],
                                    rowId: '0xe527',
                                    columnId: '0x10343',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      },
                                      {
                                        uid: '0x1032b'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x1034d',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10343',
                                        name: 'Test Unique',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10344'
                                      }
                                    ],
                                    rowId: '0xe52b',
                                    columnId: '0x10343',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10338'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10353',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10343',
                                        name: 'Test Unique',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10344'
                                      }
                                    ],
                                    rowId: '0xe529',
                                    columnId: '0x10343',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10334'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              }
                            ],
                            has_view: [
                              {
                                viewType: 'GRID',
                                'has_column|order': 0,
                                'has_row|order': 1,
                                uid: '0xdb38',
                                name: 'Grid View',
                                isDefault: true,
                                'has_view|order': 0
                              }
                            ],
                            has_row: [
                              {
                                uid: '0xdb3d',
                                has_cell: [
                                  {
                                    uid: '0xde09',
                                    isDefault: true,
                                    rowId: '0xdb3d',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 1
                                  },
                                  {
                                    uid: '0xf940',
                                    isDefault: false,
                                    rowId: '0xdb3d',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '1999-12-23T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0x1033e',
                                    isDefault: false,
                                    rowId: '0xdb3d',
                                    columnId: '0x1033c',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10345',
                                    isDefault: false,
                                    rowId: '0xdb3d',
                                    columnId: '0x10343',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0xdb3e',
                                has_cell: [
                                  {
                                    uid: '0xde0a',
                                    isDefault: true,
                                    rowId: '0xdb3e',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 2
                                  },
                                  {
                                    uid: '0xf948',
                                    isDefault: false,
                                    rowId: '0xdb3e',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2019-12-23T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0x10347',
                                    isDefault: false,
                                    rowId: '0xdb3e',
                                    columnId: '0x10343',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0xdb3f',
                                has_cell: [
                                  {
                                    uid: '0xde0b',
                                    isDefault: true,
                                    rowId: '0xdb3f',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 3
                                  },
                                  {
                                    uid: '0xf947',
                                    isDefault: false,
                                    rowId: '0xdb3f',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2019-10-29T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0x1034a',
                                    isDefault: false,
                                    rowId: '0xdb3f',
                                    columnId: '0x10343',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0xe527',
                                has_cell: [
                                  {
                                    uid: '0xe528',
                                    isDefault: true,
                                    rowId: '0xe527',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xf941',
                                    isDefault: false,
                                    rowId: '0xe527',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2019-12-13T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0x1034b',
                                    isDefault: false,
                                    rowId: '0xe527',
                                    columnId: '0x10343',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0xe529',
                                has_cell: [
                                  {
                                    uid: '0xe52a',
                                    isDefault: true,
                                    rowId: '0xe529',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xf942',
                                    isDefault: false,
                                    rowId: '0xe529',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2018-12-23T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0x10353',
                                    isDefault: false,
                                    rowId: '0xe529',
                                    columnId: '0x10343',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0xe52b',
                                has_cell: [
                                  {
                                    uid: '0xe52c',
                                    isDefault: true,
                                    rowId: '0xe52b',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xf943',
                                    isDefault: false,
                                    rowId: '0xe52b',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2018-12-13T00:00:00+08:00'
                                  },
                                  {
                                    uid: '0x1034d',
                                    isDefault: false,
                                    rowId: '0xe52b',
                                    columnId: '0x10343',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0xe52d',
                                has_cell: [
                                  {
                                    uid: '0xe52e',
                                    isDefault: true,
                                    rowId: '0xe52d',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xf944',
                                    isDefault: false,
                                    rowId: '0xe52d',
                                    columnId: '0xdb3a'
                                  }
                                ]
                              },
                              {
                                uid: '0xe52f',
                                has_cell: [
                                  {
                                    uid: '0xe530',
                                    isDefault: true,
                                    rowId: '0xe52f',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xf945',
                                    isDefault: false,
                                    rowId: '0xe52f',
                                    columnId: '0xdb3a',
                                    cellType: 'DATETIME',
                                    dateTime: '2019-12-23T00:00:00+08:00'
                                  }
                                ]
                              },
                              {
                                uid: '0xe531',
                                has_cell: [
                                  {
                                    uid: '0xe532',
                                    isDefault: true,
                                    rowId: '0xe531',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  },
                                  {
                                    uid: '0xf946',
                                    isDefault: false,
                                    rowId: '0xe531',
                                    columnId: '0xdb3a'
                                  }
                                ]
                              },
                              {
                                uid: '0x102fd',
                                has_cell: [
                                  {
                                    uid: '0x102fe',
                                    isDefault: true,
                                    rowId: '0x102fd',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x102ff',
                                has_cell: [
                                  {
                                    uid: '0x10300',
                                    isDefault: true,
                                    rowId: '0x102ff',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10301',
                                has_cell: [
                                  {
                                    uid: '0x10302',
                                    isDefault: true,
                                    rowId: '0x10301',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10303',
                                has_cell: [
                                  {
                                    uid: '0x10304',
                                    isDefault: true,
                                    rowId: '0x10303',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10305',
                                has_cell: [
                                  {
                                    uid: '0x10306',
                                    isDefault: true,
                                    rowId: '0x10305',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10307',
                                has_cell: [
                                  {
                                    uid: '0x10308',
                                    isDefault: true,
                                    rowId: '0x10307',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10309',
                                has_cell: [
                                  {
                                    uid: '0x1030a',
                                    isDefault: true,
                                    rowId: '0x10309',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x1030b',
                                has_cell: [
                                  {
                                    uid: '0x1030c',
                                    isDefault: true,
                                    rowId: '0x1030b',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x1030d',
                                has_cell: [
                                  {
                                    uid: '0x1030e',
                                    isDefault: true,
                                    rowId: '0x1030d',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x1030f',
                                has_cell: [
                                  {
                                    uid: '0x10310',
                                    isDefault: true,
                                    rowId: '0x1030f',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10319',
                                has_cell: [
                                  {
                                    uid: '0x1031a',
                                    isDefault: true,
                                    rowId: '0x10319',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x1031b',
                                has_cell: [
                                  {
                                    uid: '0x1031c',
                                    isDefault: true,
                                    rowId: '0x1031b',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x1031f',
                                has_cell: [
                                  {
                                    uid: '0x10320',
                                    isDefault: true,
                                    rowId: '0x1031f',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10321',
                                has_cell: [
                                  {
                                    uid: '0x10322',
                                    isDefault: true,
                                    rowId: '0x10321',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10323',
                                has_cell: [
                                  {
                                    uid: '0x10324',
                                    isDefault: true,
                                    rowId: '0x10323',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              },
                              {
                                uid: '0x10350',
                                has_cell: [
                                  {
                                    uid: '0x10351',
                                    isDefault: true,
                                    rowId: '0x10350',
                                    columnId: '0xdb39',
                                    cellType: 'NUMBER',
                                    number: 0
                                  }
                                ]
                              }
                            ],
                            from_core: [
                              {
                                'has_table|order': 0,
                                color: 'red',
                                icon: 'untitle',
                                uid: '0xdb36',
                                name: 'Tester'
                              }
                            ],
                            uid: '0xdb37',
                            name: 'Default',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_table|order': 0
                          },
                          {
                            has_column: [
                              {
                                uid: '0x10327',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                has_cell: [
                                  {
                                    uid: '0x10331',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10327',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10330',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'asdfadf'
                                  },
                                  {
                                    uid: '0x10332',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10327',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x1032f',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'casdfa'
                                  },
                                  {
                                    uid: '0x10339',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10327',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x1032c',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'g'
                                  },
                                  {
                                    uid: '0x10340',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10327',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x1032a',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'a'
                                  },
                                  {
                                    uid: '0x10342',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10327',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x1032b',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'b'
                                  }
                                ]
                              },
                              {
                                uid: '0x10328',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                has_cell: [
                                  {
                                    uid: '0x10333',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10328',
                                        name: 'Notes',
                                        columnType: 'LONG_TEXT',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x1032f',
                                    columnId: '0x10328',
                                    cellType: 'LONG_TEXT',
                                    text: 'dd\n'
                                  },
                                  {
                                    uid: '0x1033b',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10328',
                                        name: 'Notes',
                                        columnType: 'LONG_TEXT',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x1032a',
                                    columnId: '0x10328',
                                    cellType: 'LONG_TEXT',
                                    text: 'dafdf'
                                  }
                                ]
                              },
                              {
                                uid: '0x10329',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false
                              },
                              {
                                uid: '0x1033d',
                                name: 'Default',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0xdb37',
                                oneToOne: false,
                                symmetricColumnId: '0x1033c',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0xdb36',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0xdb37',
                                    name: 'Default'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x1033c',
                                    name: 'Test',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0xdb36',
                                    foreignTableId: '0x10325',
                                    oneToOne: false,
                                    symmetricColumnId: '0x1033d'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x1033f',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x1033d',
                                        name: 'Default',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0xdb37',
                                        oneToOne: false,
                                        symmetricColumnId: '0x1033c'
                                      }
                                    ],
                                    rowId: '0x1032a',
                                    columnId: '0x1033d',
                                    has_foreign_row: [
                                      {
                                        uid: '0xdb3d'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10341',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x1033d',
                                        name: 'Default',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0xdb37',
                                        oneToOne: false,
                                        symmetricColumnId: '0x1033c'
                                      }
                                    ],
                                    rowId: '0x1032b',
                                    columnId: '0x1033d',
                                    has_foreign_row: [
                                      {
                                        uid: '0xdb3d'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10344',
                                name: 'Default (1)',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0xdb37',
                                oneToOne: true,
                                symmetricColumnId: '0x10343',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0xdb36',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0xdb37',
                                    name: 'Default'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10343',
                                    name: 'Test Unique',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0xdb36',
                                    foreignTableId: '0x10325',
                                    oneToOne: true,
                                    symmetricColumnId: '0x10344'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10346',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10344',
                                        name: 'Default (1)',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0xdb37',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10343'
                                      }
                                    ],
                                    rowId: '0x1032a',
                                    columnId: '0x10344',
                                    has_foreign_row: [
                                      {
                                        uid: '0xdb3d'
                                      },
                                      {
                                        uid: '0xdb3e'
                                      },
                                      {
                                        uid: '0xdb3f'
                                      },
                                      {
                                        uid: '0xe527'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10348',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10344',
                                        name: 'Default (1)',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0xdb37',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10343'
                                      }
                                    ],
                                    rowId: '0x1032b',
                                    columnId: '0x10344',
                                    has_foreign_row: [
                                      {
                                        uid: '0xdb3d'
                                      },
                                      {
                                        uid: '0xe527'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10349',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10344',
                                        name: 'Default (1)',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0xdb37',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10343'
                                      }
                                    ],
                                    rowId: '0x1032c',
                                    columnId: '0x10344',
                                    has_foreign_row: [
                                      {
                                        uid: '0xdb3d'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x1034e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10344',
                                        name: 'Default (1)',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0xdb37',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10343'
                                      }
                                    ],
                                    rowId: '0x10338',
                                    columnId: '0x10344',
                                    has_foreign_row: [
                                      {
                                        uid: '0xe52b'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10352',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10344',
                                        name: 'Default (1)',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0xdb37',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10343'
                                      }
                                    ],
                                    rowId: '0x10334',
                                    columnId: '0x10344',
                                    has_foreign_row: [
                                      {
                                        uid: '0xe529'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e2b',
                                name: 'Default (2)',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e1a',
                                oneToOne: false,
                                symmetricColumnId: '0x10e2a',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0x10e19',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e1a',
                                    name: 'Default'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10e2a',
                                    name: 'Field1',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0xdb36',
                                    foreignTableId: '0x10325',
                                    oneToOne: true,
                                    symmetricColumnId: '0x10e2b'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e2d',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2b',
                                        name: 'Default (2)',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e1a',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e2a'
                                      }
                                    ],
                                    rowId: '0x1032a',
                                    columnId: '0x10e2b',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e1f'
                                      },
                                      {
                                        uid: '0x10e20'
                                      },
                                      {
                                        uid: '0x10e21'
                                      },
                                      {
                                        uid: '0x10e62'
                                      },
                                      {
                                        uid: '0x10e63'
                                      },
                                      {
                                        uid: '0x10e65'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e30',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2b',
                                        name: 'Default (2)',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e1a',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e2a'
                                      }
                                    ],
                                    rowId: '0x1032b',
                                    columnId: '0x10e2b',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e1f'
                                      },
                                      {
                                        uid: '0x10e20'
                                      },
                                      {
                                        uid: '0x10e21'
                                      },
                                      {
                                        uid: '0x10e62'
                                      },
                                      {
                                        uid: '0x10e64'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e31',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2b',
                                        name: 'Default (2)',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e1a',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e2a'
                                      }
                                    ],
                                    rowId: '0x1032f',
                                    columnId: '0x10e2b',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e20'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              }
                            ],
                            has_view: [
                              {
                                viewType: 'GRID',
                                'has_column|order': 0,
                                'has_row|order': 1,
                                uid: '0x10326',
                                name: 'Grid View',
                                isDefault: true,
                                'has_view|order': 0
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x1032a',
                                has_cell: [
                                  {
                                    uid: '0x1033b',
                                    isDefault: false,
                                    rowId: '0x1032a',
                                    columnId: '0x10328',
                                    cellType: 'LONG_TEXT',
                                    text: 'dafdf'
                                  },
                                  {
                                    uid: '0x1033f',
                                    isDefault: false,
                                    rowId: '0x1032a',
                                    columnId: '0x1033d',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10340',
                                    isDefault: true,
                                    rowId: '0x1032a',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'a'
                                  },
                                  {
                                    uid: '0x10346',
                                    isDefault: false,
                                    rowId: '0x1032a',
                                    columnId: '0x10344',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e2d',
                                    isDefault: false,
                                    rowId: '0x1032a',
                                    columnId: '0x10e2b',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x1032b',
                                has_cell: [
                                  {
                                    uid: '0x10341',
                                    isDefault: false,
                                    rowId: '0x1032b',
                                    columnId: '0x1033d',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10342',
                                    isDefault: true,
                                    rowId: '0x1032b',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'b'
                                  },
                                  {
                                    uid: '0x10348',
                                    isDefault: false,
                                    rowId: '0x1032b',
                                    columnId: '0x10344',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e30',
                                    isDefault: false,
                                    rowId: '0x1032b',
                                    columnId: '0x10e2b',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x1032c',
                                has_cell: [
                                  {
                                    uid: '0x10339',
                                    isDefault: true,
                                    rowId: '0x1032c',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'g'
                                  },
                                  {
                                    uid: '0x10349',
                                    isDefault: false,
                                    rowId: '0x1032c',
                                    columnId: '0x10344',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x1032f',
                                has_cell: [
                                  {
                                    uid: '0x10332',
                                    isDefault: true,
                                    rowId: '0x1032f',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'casdfa'
                                  },
                                  {
                                    uid: '0x10333',
                                    isDefault: false,
                                    rowId: '0x1032f',
                                    columnId: '0x10328',
                                    cellType: 'LONG_TEXT',
                                    text: 'dd\n'
                                  },
                                  {
                                    uid: '0x10e31',
                                    isDefault: false,
                                    rowId: '0x1032f',
                                    columnId: '0x10e2b',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10330',
                                has_cell: [
                                  {
                                    uid: '0x10331',
                                    isDefault: true,
                                    rowId: '0x10330',
                                    columnId: '0x10327',
                                    cellType: 'TEXT',
                                    text: 'asdfadf'
                                  }
                                ]
                              },
                              {
                                uid: '0x10334',
                                has_cell: [
                                  {
                                    uid: '0x10352',
                                    isDefault: false,
                                    rowId: '0x10334',
                                    columnId: '0x10344',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10338',
                                has_cell: [
                                  {
                                    uid: '0x1034e',
                                    isDefault: false,
                                    rowId: '0x10338',
                                    columnId: '0x10344',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              }
                            ],
                            from_core: [
                              {
                                'has_table|order': 0,
                                color: 'red',
                                icon: 'untitle',
                                uid: '0xdb36',
                                name: 'Tester'
                              }
                            ],
                            uid: '0x10325',
                            name: 'Table 2',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_table|order': 1
                          }
                        ],
                        color: 'red',
                        icon: 'untitle',
                        from_workspace: [
                          {
                            uid: '0x124',
                            name: 'Caminer'
                          }
                        ],
                        uid: '0xdb36',
                        name: 'Tester',
                        has_user_group: [
                          {
                            color: 'N/A',
                            icon: 'N/A',
                            uid: '0x126',
                            name: 'Admin',
                            role: 'ADMIN'
                          }
                        ]
                      },
                      {
                        has_table: [
                          {
                            has_column: [
                              {
                                uid: '0x10358',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                has_cell: [
                                  {
                                    uid: '0x1036b',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10358',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x1035b',
                                    columnId: '0x10358',
                                    cellType: 'TEXT',
                                    text: 'e'
                                  },
                                  {
                                    uid: '0x1036d',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10358',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x1035d',
                                    columnId: '0x10358',
                                    cellType: 'TEXT',
                                    text: 'f'
                                  }
                                ]
                              },
                              {
                                uid: '0x10359',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false
                              },
                              {
                                uid: '0x1035a',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false
                              }
                            ],
                            has_view: [
                              {
                                viewType: 'GRID',
                                'has_column|order': 0,
                                'has_row|order': 1,
                                uid: '0x10357',
                                name: 'Grid View',
                                isDefault: true,
                                'has_view|order': 0
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x1035b',
                                has_cell: [
                                  {
                                    uid: '0x1036b',
                                    isDefault: true,
                                    rowId: '0x1035b',
                                    columnId: '0x10358',
                                    cellType: 'TEXT',
                                    text: 'e'
                                  }
                                ]
                              },
                              {
                                uid: '0x1035d',
                                has_cell: [
                                  {
                                    uid: '0x1036d',
                                    isDefault: true,
                                    rowId: '0x1035d',
                                    columnId: '0x10358',
                                    cellType: 'TEXT',
                                    text: 'f'
                                  }
                                ]
                              },
                              {
                                uid: '0x10397'
                              }
                            ],
                            from_core: [
                              {
                                'has_table|order': 0,
                                color: 'blue',
                                icon: 'untitle',
                                uid: '0x10355',
                                name: 'One to one Test'
                              }
                            ],
                            uid: '0x10356',
                            name: 'Default',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_table|order': 0
                          }
                        ],
                        color: 'blue',
                        icon: 'untitle',
                        from_workspace: [
                          {
                            uid: '0x124',
                            name: 'Caminer'
                          }
                        ],
                        uid: '0x10355',
                        name: 'One to one Test',
                        has_user_group: [
                          {
                            color: 'N/A',
                            icon: 'N/A',
                            uid: '0x126',
                            name: 'Admin',
                            role: 'ADMIN'
                          },
                          {
                            color: '',
                            icon: '',
                            uid: '0x3b0c',
                            name: '',
                            role: 'INDIVIDUAL'
                          }
                        ]
                      },
                      {
                        has_table: [
                          {
                            has_column: [
                              {
                                uid: '0x10e1c',
                                name: 'Name',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: true,
                                defaultNumber: 0,
                                has_cell: [
                                  {
                                    uid: '0x10e3b',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e1c',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10e1f',
                                    columnId: '0x10e1c',
                                    cellType: 'NUMBER',
                                    number: 11
                                  },
                                  {
                                    uid: '0x10e3c',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e1c',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10e20',
                                    columnId: '0x10e1c',
                                    cellType: 'NUMBER',
                                    number: 22
                                  },
                                  {
                                    uid: '0x10e3d',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e1c',
                                        name: 'Name',
                                        columnType: 'NUMBER',
                                        precision: 1,
                                        isDefault: true,
                                        defaultNumber: 0
                                      }
                                    ],
                                    rowId: '0x10e21',
                                    columnId: '0x10e1c',
                                    cellType: 'NUMBER',
                                    number: 33
                                  }
                                ]
                              },
                              {
                                uid: '0x10e1d',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false
                              },
                              {
                                uid: '0x10e1e',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false
                              },
                              {
                                uid: '0x10e2a',
                                name: 'Field1',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0x10325',
                                oneToOne: true,
                                symmetricColumnId: '0x10e2b',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0xdb36',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10325',
                                    name: 'Table 2'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10e2b',
                                    name: 'Default (2)',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e19',
                                    foreignTableId: '0x10e1a',
                                    oneToOne: false,
                                    symmetricColumnId: '0x10e2a'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e2c',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2a',
                                        name: 'Field1',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e2b'
                                      }
                                    ],
                                    rowId: '0x10e1f',
                                    columnId: '0x10e2a',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      },
                                      {
                                        uid: '0x1032b'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e2e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2a',
                                        name: 'Field1',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e2b'
                                      }
                                    ],
                                    rowId: '0x10e20',
                                    columnId: '0x10e2a',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      },
                                      {
                                        uid: '0x1032b'
                                      },
                                      {
                                        uid: '0x1032f'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e2f',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2a',
                                        name: 'Field1',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e2b'
                                      }
                                    ],
                                    rowId: '0x10e21',
                                    columnId: '0x10e2a',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      },
                                      {
                                        uid: '0x1032b'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10eb3',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2a',
                                        name: 'Field1',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e2b'
                                      }
                                    ],
                                    rowId: '0x10e62',
                                    columnId: '0x10e2a',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      },
                                      {
                                        uid: '0x1032b'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10eb4',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2a',
                                        name: 'Field1',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e2b'
                                      }
                                    ],
                                    rowId: '0x10e63',
                                    columnId: '0x10e2a',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10eb5',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2a',
                                        name: 'Field1',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e2b'
                                      }
                                    ],
                                    rowId: '0x10e64',
                                    columnId: '0x10e2a',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032b'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10eb6',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e2a',
                                        name: 'Field1',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0xdb36',
                                        foreignTableId: '0x10325',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e2b'
                                      }
                                    ],
                                    rowId: '0x10e65',
                                    columnId: '0x10e2a',
                                    has_foreign_row: [
                                      {
                                        uid: '0x1032a'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e32',
                                name: 'Field2',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e22',
                                oneToOne: true,
                                symmetricColumnId: '0x10e33',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0x10e19',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e22',
                                    name: 'Table 2'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10e33',
                                    name: 'Default',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e19',
                                    foreignTableId: '0x10e1a',
                                    oneToOne: true,
                                    symmetricColumnId: '0x10e32'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e34',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e32',
                                        name: 'Field2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e33'
                                      }
                                    ],
                                    rowId: '0x10e1f',
                                    columnId: '0x10e32',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e28'
                                      },
                                      {
                                        uid: '0x10e29'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e36',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e32',
                                        name: 'Field2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e33'
                                      }
                                    ],
                                    rowId: '0x10e20',
                                    columnId: '0x10e32',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e27'
                                      },
                                      {
                                        uid: '0x10e29'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e3e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e32',
                                        name: 'Field2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e33'
                                      }
                                    ],
                                    rowId: '0x10e21',
                                    columnId: '0x10e32',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e29'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec1',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e32',
                                        name: 'Field2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e33'
                                      }
                                    ],
                                    rowId: '0x10e62',
                                    columnId: '0x10e32',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e27'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec2',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e32',
                                        name: 'Field2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e33'
                                      }
                                    ],
                                    rowId: '0x10e63',
                                    columnId: '0x10e32',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e27'
                                      },
                                      {
                                        uid: '0x10e28'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec3',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e32',
                                        name: 'Field2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e33'
                                      }
                                    ],
                                    rowId: '0x10e64',
                                    columnId: '0x10e32',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e27'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec4',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e32',
                                        name: 'Field2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e33'
                                      }
                                    ],
                                    rowId: '0x10e65',
                                    columnId: '0x10e32',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e29'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e67',
                                name: 'Currency Test',
                                columnType: 'CURRENCY',
                                precision: 0,
                                isDefault: false,
                                defaultNumber: 0,
                                currencyFormat: 'USD'
                              },
                              {
                                uid: '0x10ea2',
                                name: '2332Field 7',
                                columnType: 'CURRENCY',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0,
                                currencyFormat: 'USD'
                              },
                              {
                                uid: '0x10ea3',
                                name: 'Number',
                                columnType: 'CURRENCY',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0,
                                currencyFormat: 'USD',
                                from_formula_column: [
                                  {
                                    uid: '0x10ec5',
                                    name: 'f f f',
                                    columnType: 'FORMULA',
                                    isDefault: false,
                                    formula: '$column_value_0x10ea3'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10ea4',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ea3',
                                        name: 'Number',
                                        columnType: 'CURRENCY',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'USD'
                                      }
                                    ],
                                    rowId: '0x10e20',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 23
                                  },
                                  {
                                    uid: '0x10ea5',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ea3',
                                        name: 'Number',
                                        columnType: 'CURRENCY',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'USD'
                                      }
                                    ],
                                    rowId: '0x10e1f',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 234
                                  },
                                  {
                                    uid: '0x10ea6',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ea3',
                                        name: 'Number',
                                        columnType: 'CURRENCY',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'USD'
                                      }
                                    ],
                                    rowId: '0x10e21',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 23
                                  },
                                  {
                                    uid: '0x10ea7',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ea3',
                                        name: 'Number',
                                        columnType: 'CURRENCY',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'USD'
                                      }
                                    ],
                                    rowId: '0x10e63',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 4552
                                  },
                                  {
                                    uid: '0x10ea8',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ea3',
                                        name: 'Number',
                                        columnType: 'CURRENCY',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'USD'
                                      }
                                    ],
                                    rowId: '0x10e62',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 3
                                  },
                                  {
                                    uid: '0x10ea9',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ea3',
                                        name: 'Number',
                                        columnType: 'CURRENCY',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'USD'
                                      }
                                    ],
                                    rowId: '0x10e64',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 23
                                  },
                                  {
                                    uid: '0x10eaa',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ea3',
                                        name: 'Number',
                                        columnType: 'CURRENCY',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'USD'
                                      }
                                    ],
                                    rowId: '0x10e66',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 5
                                  },
                                  {
                                    uid: '0x10eab',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ea3',
                                        name: 'Number',
                                        columnType: 'CURRENCY',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'USD'
                                      }
                                    ],
                                    rowId: '0x10e65',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 4
                                  }
                                ]
                              },
                              {
                                uid: '0x10ec5',
                                name: 'f f f',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x10ea3',
                                has_cell: [
                                  {
                                    uid: '0x10ec6',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ec5',
                                        name: 'f f f',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ea3'
                                      }
                                    ],
                                    rowId: '0x10e1f',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '234'
                                  },
                                  {
                                    uid: '0x10ec7',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ec5',
                                        name: 'f f f',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ea3'
                                      }
                                    ],
                                    rowId: '0x10e20',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '23'
                                  },
                                  {
                                    uid: '0x10ec8',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ec5',
                                        name: 'f f f',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ea3'
                                      }
                                    ],
                                    rowId: '0x10e21',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '23'
                                  },
                                  {
                                    uid: '0x10ec9',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ec5',
                                        name: 'f f f',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ea3'
                                      }
                                    ],
                                    rowId: '0x10e62',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '3'
                                  },
                                  {
                                    uid: '0x10eca',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ec5',
                                        name: 'f f f',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ea3'
                                      }
                                    ],
                                    rowId: '0x10e63',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '4552'
                                  },
                                  {
                                    uid: '0x10ecb',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ec5',
                                        name: 'f f f',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ea3'
                                      }
                                    ],
                                    rowId: '0x10e64',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '23'
                                  },
                                  {
                                    uid: '0x10ecc',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ec5',
                                        name: 'f f f',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ea3'
                                      }
                                    ],
                                    rowId: '0x10e65',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '4'
                                  },
                                  {
                                    uid: '0x10ecd',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ec5',
                                        name: 'f f f',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ea3'
                                      }
                                    ],
                                    rowId: '0x10e66',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '5'
                                  }
                                ]
                              }
                            ],
                            has_view: [
                              {
                                viewType: 'GRID',
                                'has_column|order': 0,
                                'has_row|order': 1,
                                uid: '0x10e1b',
                                name: 'Grid View',
                                isDefault: true,
                                'has_view|order': 0
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e1f',
                                has_cell: [
                                  {
                                    uid: '0x10e2c',
                                    isDefault: false,
                                    rowId: '0x10e1f',
                                    columnId: '0x10e2a',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e34',
                                    isDefault: false,
                                    rowId: '0x10e1f',
                                    columnId: '0x10e32',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e3b',
                                    isDefault: true,
                                    rowId: '0x10e1f',
                                    columnId: '0x10e1c',
                                    cellType: 'NUMBER',
                                    number: 11
                                  },
                                  {
                                    uid: '0x10ea5',
                                    isDefault: false,
                                    rowId: '0x10e1f',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 234
                                  },
                                  {
                                    uid: '0x10ec6',
                                    isDefault: false,
                                    rowId: '0x10e1f',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '234'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e20',
                                has_cell: [
                                  {
                                    uid: '0x10e2e',
                                    isDefault: false,
                                    rowId: '0x10e20',
                                    columnId: '0x10e2a',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e36',
                                    isDefault: false,
                                    rowId: '0x10e20',
                                    columnId: '0x10e32',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e3c',
                                    isDefault: true,
                                    rowId: '0x10e20',
                                    columnId: '0x10e1c',
                                    cellType: 'NUMBER',
                                    number: 22
                                  },
                                  {
                                    uid: '0x10ea4',
                                    isDefault: false,
                                    rowId: '0x10e20',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 23
                                  },
                                  {
                                    uid: '0x10ec7',
                                    isDefault: false,
                                    rowId: '0x10e20',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '23'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e21',
                                has_cell: [
                                  {
                                    uid: '0x10e2f',
                                    isDefault: false,
                                    rowId: '0x10e21',
                                    columnId: '0x10e2a',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e3d',
                                    isDefault: true,
                                    rowId: '0x10e21',
                                    columnId: '0x10e1c',
                                    cellType: 'NUMBER',
                                    number: 33
                                  },
                                  {
                                    uid: '0x10e3e',
                                    isDefault: false,
                                    rowId: '0x10e21',
                                    columnId: '0x10e32',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ea6',
                                    isDefault: false,
                                    rowId: '0x10e21',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 23
                                  },
                                  {
                                    uid: '0x10ec8',
                                    isDefault: false,
                                    rowId: '0x10e21',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '23'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e62',
                                has_cell: [
                                  {
                                    uid: '0x10ea8',
                                    isDefault: false,
                                    rowId: '0x10e62',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 3
                                  },
                                  {
                                    uid: '0x10eb3',
                                    isDefault: false,
                                    rowId: '0x10e62',
                                    columnId: '0x10e2a',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec1',
                                    isDefault: false,
                                    rowId: '0x10e62',
                                    columnId: '0x10e32',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec9',
                                    isDefault: false,
                                    rowId: '0x10e62',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '3'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e63',
                                has_cell: [
                                  {
                                    uid: '0x10ea7',
                                    isDefault: false,
                                    rowId: '0x10e63',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 4552
                                  },
                                  {
                                    uid: '0x10eb4',
                                    isDefault: false,
                                    rowId: '0x10e63',
                                    columnId: '0x10e2a',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec2',
                                    isDefault: false,
                                    rowId: '0x10e63',
                                    columnId: '0x10e32',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10eca',
                                    isDefault: false,
                                    rowId: '0x10e63',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '4552'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e64',
                                has_cell: [
                                  {
                                    uid: '0x10ea9',
                                    isDefault: false,
                                    rowId: '0x10e64',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 23
                                  },
                                  {
                                    uid: '0x10eb5',
                                    isDefault: false,
                                    rowId: '0x10e64',
                                    columnId: '0x10e2a',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec3',
                                    isDefault: false,
                                    rowId: '0x10e64',
                                    columnId: '0x10e32',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ecb',
                                    isDefault: false,
                                    rowId: '0x10e64',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '23'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e65',
                                has_cell: [
                                  {
                                    uid: '0x10eab',
                                    isDefault: false,
                                    rowId: '0x10e65',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 4
                                  },
                                  {
                                    uid: '0x10eb6',
                                    isDefault: false,
                                    rowId: '0x10e65',
                                    columnId: '0x10e2a',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ec4',
                                    isDefault: false,
                                    rowId: '0x10e65',
                                    columnId: '0x10e32',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ecc',
                                    isDefault: false,
                                    rowId: '0x10e65',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '4'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e66',
                                has_cell: [
                                  {
                                    uid: '0x10eaa',
                                    isDefault: false,
                                    rowId: '0x10e66',
                                    columnId: '0x10ea3',
                                    cellType: 'CURRENCY',
                                    number: 5
                                  },
                                  {
                                    uid: '0x10ecd',
                                    isDefault: false,
                                    rowId: '0x10e66',
                                    columnId: '0x10ec5',
                                    cellType: 'FORMULA',
                                    result: '5'
                                  }
                                ]
                              }
                            ],
                            from_core: [
                              {
                                'has_table|order': 0,
                                color: 'red',
                                icon: 'untitle',
                                uid: '0x10e19',
                                name: 'Tester'
                              }
                            ],
                            uid: '0x10e1a',
                            name: 'Default',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_table|order': 0
                          },
                          {
                            has_column: [
                              {
                                uid: '0x10e24',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                has_cell: [
                                  {
                                    uid: '0x10e38',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e24',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e27',
                                    columnId: '0x10e24',
                                    cellType: 'TEXT',
                                    text: 'a'
                                  },
                                  {
                                    uid: '0x10e39',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e24',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e28',
                                    columnId: '0x10e24',
                                    cellType: 'TEXT',
                                    text: 'b'
                                  },
                                  {
                                    uid: '0x10e3a',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e24',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e29',
                                    columnId: '0x10e24',
                                    cellType: 'TEXT',
                                    text: 'c'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e25',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false
                              },
                              {
                                uid: '0x10e26',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false
                              },
                              {
                                uid: '0x10e33',
                                name: 'Default',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e1a',
                                oneToOne: true,
                                symmetricColumnId: '0x10e32',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0x10e19',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e1a',
                                    name: 'Default'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10e32',
                                    name: 'Field2',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e19',
                                    foreignTableId: '0x10e22',
                                    oneToOne: true,
                                    symmetricColumnId: '0x10e33'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e35',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e33',
                                        name: 'Default',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e1a',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e32'
                                      }
                                    ],
                                    rowId: '0x10e27',
                                    columnId: '0x10e33',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e20'
                                      },
                                      {
                                        uid: '0x10e62'
                                      },
                                      {
                                        uid: '0x10e63'
                                      },
                                      {
                                        uid: '0x10e64'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e37',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e33',
                                        name: 'Default',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e1a',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e32'
                                      }
                                    ],
                                    rowId: '0x10e28',
                                    columnId: '0x10e33',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e1f'
                                      },
                                      {
                                        uid: '0x10e63'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e3f',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e33',
                                        name: 'Default',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e1a',
                                        oneToOne: true,
                                        symmetricColumnId: '0x10e32'
                                      }
                                    ],
                                    rowId: '0x10e29',
                                    columnId: '0x10e33',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e1f'
                                      },
                                      {
                                        uid: '0x10e20'
                                      },
                                      {
                                        uid: '0x10e21'
                                      },
                                      {
                                        uid: '0x10e65'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e40',
                                name: 'self',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e22',
                                oneToOne: false,
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0x10e19',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e22',
                                    name: 'Table 2'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e41',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e40',
                                        name: 'self',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: false
                                      }
                                    ],
                                    rowId: '0x10e27',
                                    columnId: '0x10e40',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e28'
                                      },
                                      {
                                        uid: '0x10e29'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e42',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e40',
                                        name: 'self',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: false
                                      }
                                    ],
                                    rowId: '0x10e28',
                                    columnId: '0x10e40',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e27'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e43',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e40',
                                        name: 'self',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: false
                                      }
                                    ],
                                    rowId: '0x10e29',
                                    columnId: '0x10e40',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e27'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e4f',
                                name: 'self2',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e22',
                                oneToOne: false,
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'red',
                                    icon: 'untitle',
                                    uid: '0x10e19',
                                    name: 'Tester'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e22',
                                    name: 'Table 2'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e50',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e4f',
                                        name: 'self2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: false
                                      }
                                    ],
                                    rowId: '0x10e27',
                                    columnId: '0x10e4f',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e28'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e51',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e4f',
                                        name: 'self2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: false
                                      }
                                    ],
                                    rowId: '0x10e28',
                                    columnId: '0x10e4f',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e27'
                                      },
                                      {
                                        uid: '0x10e29'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e52',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e4f',
                                        name: 'self2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e19',
                                        foreignTableId: '0x10e22',
                                        oneToOne: false
                                      }
                                    ],
                                    rowId: '0x10e29',
                                    columnId: '0x10e4f',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e28'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              }
                            ],
                            has_view: [
                              {
                                viewType: 'GRID',
                                'has_column|order': 0,
                                'has_row|order': 1,
                                uid: '0x10e23',
                                name: 'Grid View',
                                isDefault: true,
                                'has_view|order': 0
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e27',
                                has_cell: [
                                  {
                                    uid: '0x10e35',
                                    isDefault: false,
                                    rowId: '0x10e27',
                                    columnId: '0x10e33',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e38',
                                    isDefault: true,
                                    rowId: '0x10e27',
                                    columnId: '0x10e24',
                                    cellType: 'TEXT',
                                    text: 'a'
                                  },
                                  {
                                    uid: '0x10e41',
                                    isDefault: false,
                                    rowId: '0x10e27',
                                    columnId: '0x10e40',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e50',
                                    isDefault: false,
                                    rowId: '0x10e27',
                                    columnId: '0x10e4f',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e28',
                                has_cell: [
                                  {
                                    uid: '0x10e37',
                                    isDefault: false,
                                    rowId: '0x10e28',
                                    columnId: '0x10e33',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e39',
                                    isDefault: true,
                                    rowId: '0x10e28',
                                    columnId: '0x10e24',
                                    cellType: 'TEXT',
                                    text: 'b'
                                  },
                                  {
                                    uid: '0x10e42',
                                    isDefault: false,
                                    rowId: '0x10e28',
                                    columnId: '0x10e40',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e51',
                                    isDefault: false,
                                    rowId: '0x10e28',
                                    columnId: '0x10e4f',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e29',
                                has_cell: [
                                  {
                                    uid: '0x10e3a',
                                    isDefault: true,
                                    rowId: '0x10e29',
                                    columnId: '0x10e24',
                                    cellType: 'TEXT',
                                    text: 'c'
                                  },
                                  {
                                    uid: '0x10e3f',
                                    isDefault: false,
                                    rowId: '0x10e29',
                                    columnId: '0x10e33',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e43',
                                    isDefault: false,
                                    rowId: '0x10e29',
                                    columnId: '0x10e40',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e52',
                                    isDefault: false,
                                    rowId: '0x10e29',
                                    columnId: '0x10e4f',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              }
                            ],
                            from_core: [
                              {
                                'has_table|order': 0,
                                color: 'red',
                                icon: 'untitle',
                                uid: '0x10e19',
                                name: 'Tester'
                              }
                            ],
                            uid: '0x10e22',
                            name: 'Table 2',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_table|order': 1
                          }
                        ],
                        color: 'red',
                        icon: 'untitle',
                        from_workspace: [
                          {
                            uid: '0x124',
                            name: 'Caminer'
                          }
                        ],
                        uid: '0x10e19',
                        name: 'Tester',
                        has_user_group: [
                          {
                            color: 'N/A',
                            icon: 'N/A',
                            uid: '0x126',
                            name: 'Admin',
                            role: 'ADMIN'
                          }
                        ]
                      },
                      {
                        has_table: [
                          {
                            has_column: [
                              {
                                uid: '0x10e6b',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                has_lookup_update: [
                                  {
                                    uid: '0x10e89',
                                    name: 'Lookup name in tble 1',
                                    columnType: 'LOOKUP',
                                    isDefault: false,
                                    foreignLookupColumnId: '0x10e6b',
                                    recordReferenceColumnId: '0x10e81'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e82',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e6b',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e6e',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'asdf'
                                  },
                                  {
                                    uid: '0x10e83',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e6b',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e6f',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'b'
                                  },
                                  {
                                    uid: '0x10e84',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e6b',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e70',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'c'
                                  },
                                  {
                                    uid: '0x11947',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e6b',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x11943',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'asdf'
                                  },
                                  {
                                    uid: '0x1194b',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e6b',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x1194a',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'asdf'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e6c',
                                name: 'Notes',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e68',
                                foreignTableId: '0x10e71',
                                oneToOne: false,
                                symmetricColumnId: '0x10e81',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'blue',
                                    icon: 'untitle',
                                    uid: '0x10e68',
                                    name: 'Lookup Query Test'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e71',
                                    name: 'Table 2'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10e81',
                                    name: 'Default',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e68',
                                    foreignTableId: '0x10e69',
                                    oneToOne: false,
                                    symmetricColumnId: '0x10e6c'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e8b',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e6c',
                                        name: 'Notes',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e71',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e81'
                                      }
                                    ],
                                    rowId: '0x10e6e',
                                    columnId: '0x10e6c',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e76'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e8e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e6c',
                                        name: 'Notes',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e71',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e81'
                                      }
                                    ],
                                    rowId: '0x10e6f',
                                    columnId: '0x10e6c',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e76'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e8f',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e6c',
                                        name: 'Notes',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e71',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e81'
                                      }
                                    ],
                                    rowId: '0x10e70',
                                    columnId: '0x10e6c',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e76'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x11946',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e6c',
                                        name: 'Notes',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e71',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e81'
                                      }
                                    ],
                                    rowId: '0x11943',
                                    columnId: '0x10e6c',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e76'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x1194d',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e6c',
                                        name: 'Notes',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e71',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e81'
                                      }
                                    ],
                                    rowId: '0x1194a',
                                    columnId: '0x10e6c',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e76'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10ece',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 4,
                                isDefault: false,
                                from_formula_column: [
                                  {
                                    uid: '0x11936',
                                    name: 'fff',
                                    columnType: 'FORMULA',
                                    isDefault: false,
                                    formula: '$column_value_0x10ece+1'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10ecf',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e6e',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 1
                                  },
                                  {
                                    uid: '0x10ed0',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e6f',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 2
                                  },
                                  {
                                    uid: '0x10ed1',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e70',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 3
                                  },
                                  {
                                    uid: '0x10ed5',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10ed2',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 5
                                  },
                                  {
                                    uid: '0x10ed6',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10ed3',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 6
                                  },
                                  {
                                    uid: '0x10ed7',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10ed4',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 7
                                  },
                                  {
                                    uid: '0x10ee3',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10ed8',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 123123123
                                  },
                                  {
                                    uid: '0x10ee8',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10ed9',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 245332.2323
                                  },
                                  {
                                    uid: '0x11945',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x11943',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 1
                                  },
                                  {
                                    uid: '0x1194c',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10ece',
                                        name: 'Number',
                                        columnType: 'NUMBER',
                                        precision: 4,
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x1194a',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 1
                                  }
                                ]
                              },
                              {
                                uid: '0x10edc',
                                name: 'Field 523',
                                columnType: 'CHECKBOX',
                                isDefault: false,
                                has_cell: [
                                  {
                                    uid: '0x10edd',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10edc',
                                        name: 'Field 523',
                                        columnType: 'CHECKBOX',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e6e',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x10ede',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10edc',
                                        name: 'Field 523',
                                        columnType: 'CHECKBOX',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e6f',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x10edf',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10edc',
                                        name: 'Field 523',
                                        columnType: 'CHECKBOX',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10ed8',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x10ee2',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10edc',
                                        name: 'Field 523',
                                        columnType: 'CHECKBOX',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e70',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x11944',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10edc',
                                        name: 'Field 523',
                                        columnType: 'CHECKBOX',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x11943',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x1194e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10edc',
                                        name: 'Field 523',
                                        columnType: 'CHECKBOX',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x1194a',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  }
                                ]
                              },
                              {
                                uid: '0x11936',
                                name: 'fff',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x10ece+1',
                                has_cell: [
                                  {
                                    uid: '0x11937',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10e6e',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '2'
                                  },
                                  {
                                    uid: '0x11938',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10e6f',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '3'
                                  },
                                  {
                                    uid: '0x11939',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10e70',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '4'
                                  },
                                  {
                                    uid: '0x1193a',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10ed2',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '6'
                                  },
                                  {
                                    uid: '0x1193b',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10ed3',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '7'
                                  },
                                  {
                                    uid: '0x1193c',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10ed4',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '8'
                                  },
                                  {
                                    uid: '0x1193d',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10ed8',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '123123124'
                                  },
                                  {
                                    uid: '0x1193e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10ed9',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '245333.2323'
                                  },
                                  {
                                    uid: '0x1193f',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10eda',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '1'
                                  },
                                  {
                                    uid: '0x11940',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10edb',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '1'
                                  },
                                  {
                                    uid: '0x11941',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10ee0',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '1'
                                  },
                                  {
                                    uid: '0x11942',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x10ee1',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '1'
                                  },
                                  {
                                    uid: '0x11948',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x11943',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '2'
                                  },
                                  {
                                    uid: '0x1194f',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11936',
                                        name: 'fff',
                                        columnType: 'FORMULA',
                                        isDefault: false,
                                        formula: '$column_value_0x10ece+1'
                                      }
                                    ],
                                    rowId: '0x1194a',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '2'
                                  }
                                ]
                              }
                            ],
                            has_view: [
                              {
                                viewType: 'GRID',
                                'has_column|order': 0,
                                'has_row|order': 1,
                                uid: '0x10e6a',
                                name: 'Grid View',
                                isDefault: true,
                                'has_view|order': 0
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e6e',
                                has_cell: [
                                  {
                                    uid: '0x10e82',
                                    isDefault: true,
                                    rowId: '0x10e6e',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'asdf'
                                  },
                                  {
                                    uid: '0x10e8b',
                                    isDefault: false,
                                    rowId: '0x10e6e',
                                    columnId: '0x10e6c',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ecf',
                                    isDefault: false,
                                    rowId: '0x10e6e',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 1
                                  },
                                  {
                                    uid: '0x10edd',
                                    isDefault: false,
                                    rowId: '0x10e6e',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x11937',
                                    isDefault: false,
                                    rowId: '0x10e6e',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '2'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e6f',
                                has_cell: [
                                  {
                                    uid: '0x10e83',
                                    isDefault: true,
                                    rowId: '0x10e6f',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'b'
                                  },
                                  {
                                    uid: '0x10e8e',
                                    isDefault: false,
                                    rowId: '0x10e6f',
                                    columnId: '0x10e6c',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ed0',
                                    isDefault: false,
                                    rowId: '0x10e6f',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 2
                                  },
                                  {
                                    uid: '0x10ede',
                                    isDefault: false,
                                    rowId: '0x10e6f',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x11938',
                                    isDefault: false,
                                    rowId: '0x10e6f',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '3'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e70',
                                has_cell: [
                                  {
                                    uid: '0x10e84',
                                    isDefault: true,
                                    rowId: '0x10e70',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'c'
                                  },
                                  {
                                    uid: '0x10e8f',
                                    isDefault: false,
                                    rowId: '0x10e70',
                                    columnId: '0x10e6c',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ed1',
                                    isDefault: false,
                                    rowId: '0x10e70',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 3
                                  },
                                  {
                                    uid: '0x10ee2',
                                    isDefault: false,
                                    rowId: '0x10e70',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x11939',
                                    isDefault: false,
                                    rowId: '0x10e70',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '4'
                                  }
                                ]
                              },
                              {
                                uid: '0x10ed2',
                                has_cell: [
                                  {
                                    uid: '0x10ed5',
                                    isDefault: false,
                                    rowId: '0x10ed2',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 5
                                  },
                                  {
                                    uid: '0x1193a',
                                    isDefault: false,
                                    rowId: '0x10ed2',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '6'
                                  }
                                ]
                              },
                              {
                                uid: '0x10ed3',
                                has_cell: [
                                  {
                                    uid: '0x10ed6',
                                    isDefault: false,
                                    rowId: '0x10ed3',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 6
                                  },
                                  {
                                    uid: '0x1193b',
                                    isDefault: false,
                                    rowId: '0x10ed3',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '7'
                                  }
                                ]
                              },
                              {
                                uid: '0x10ed4',
                                has_cell: [
                                  {
                                    uid: '0x10ed7',
                                    isDefault: false,
                                    rowId: '0x10ed4',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 7
                                  },
                                  {
                                    uid: '0x1193c',
                                    isDefault: false,
                                    rowId: '0x10ed4',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '8'
                                  }
                                ]
                              },
                              {
                                uid: '0x10ed8',
                                has_cell: [
                                  {
                                    uid: '0x10edf',
                                    isDefault: false,
                                    rowId: '0x10ed8',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x10ee3',
                                    isDefault: false,
                                    rowId: '0x10ed8',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 123123123
                                  },
                                  {
                                    uid: '0x1193d',
                                    isDefault: false,
                                    rowId: '0x10ed8',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '123123124'
                                  }
                                ]
                              },
                              {
                                uid: '0x10ed9',
                                has_cell: [
                                  {
                                    uid: '0x10ee8',
                                    isDefault: false,
                                    rowId: '0x10ed9',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 245332.2323
                                  },
                                  {
                                    uid: '0x1193e',
                                    isDefault: false,
                                    rowId: '0x10ed9',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '245333.2323'
                                  }
                                ]
                              },
                              {
                                uid: '0x10eda',
                                has_cell: [
                                  {
                                    uid: '0x1193f',
                                    isDefault: false,
                                    rowId: '0x10eda',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '1'
                                  }
                                ]
                              },
                              {
                                uid: '0x10edb',
                                has_cell: [
                                  {
                                    uid: '0x11940',
                                    isDefault: false,
                                    rowId: '0x10edb',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '1'
                                  }
                                ]
                              },
                              {
                                uid: '0x10ee0',
                                has_cell: [
                                  {
                                    uid: '0x11941',
                                    isDefault: false,
                                    rowId: '0x10ee0',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '1'
                                  }
                                ]
                              },
                              {
                                uid: '0x10ee1',
                                has_cell: [
                                  {
                                    uid: '0x11942',
                                    isDefault: false,
                                    rowId: '0x10ee1',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '1'
                                  }
                                ]
                              },
                              {
                                uid: '0x11943',
                                has_cell: [
                                  {
                                    uid: '0x11944',
                                    isDefault: false,
                                    rowId: '0x11943',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x11945',
                                    isDefault: false,
                                    rowId: '0x11943',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 1
                                  },
                                  {
                                    uid: '0x11946',
                                    isDefault: false,
                                    rowId: '0x11943',
                                    columnId: '0x10e6c',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x11947',
                                    isDefault: true,
                                    rowId: '0x11943',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'asdf'
                                  },
                                  {
                                    uid: '0x11948',
                                    isDefault: false,
                                    rowId: '0x11943',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '2'
                                  }
                                ]
                              },
                              {
                                uid: '0x1194a',
                                has_cell: [
                                  {
                                    uid: '0x1194b',
                                    isDefault: true,
                                    rowId: '0x1194a',
                                    columnId: '0x10e6b',
                                    cellType: 'TEXT',
                                    text: 'asdf'
                                  },
                                  {
                                    uid: '0x1194c',
                                    isDefault: false,
                                    rowId: '0x1194a',
                                    columnId: '0x10ece',
                                    cellType: 'NUMBER',
                                    number: 1
                                  },
                                  {
                                    uid: '0x1194d',
                                    isDefault: false,
                                    rowId: '0x1194a',
                                    columnId: '0x10e6c',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x1194e',
                                    isDefault: false,
                                    rowId: '0x1194a',
                                    columnId: '0x10edc',
                                    cellType: 'CHECKBOX',
                                    checked: true
                                  },
                                  {
                                    uid: '0x1194f',
                                    isDefault: false,
                                    rowId: '0x1194a',
                                    columnId: '0x11936',
                                    cellType: 'FORMULA',
                                    result: '2'
                                  }
                                ]
                              }
                            ],
                            from_core: [
                              {
                                'has_table|order': 0,
                                color: 'blue',
                                icon: 'untitle',
                                uid: '0x10e68',
                                name: 'Lookup Query Test'
                              }
                            ],
                            uid: '0x10e69',
                            name: 'Default',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_table|order': 0
                          },
                          {
                            has_column: [
                              {
                                uid: '0x10e73',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                has_cell: [
                                  {
                                    uid: '0x10e90',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e73',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e76',
                                    columnId: '0x10e73',
                                    cellType: 'TEXT',
                                    text: 'c'
                                  },
                                  {
                                    uid: '0x10e91',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e73',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e77',
                                    columnId: '0x10e73',
                                    cellType: 'TEXT',
                                    text: 'd'
                                  },
                                  {
                                    uid: '0x10e92',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e73',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e78',
                                    columnId: '0x10e73',
                                    cellType: 'TEXT',
                                    text: 'e'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e74',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                has_cell: [
                                  {
                                    uid: '0x10e85',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e74',
                                        name: 'Notes',
                                        columnType: 'LONG_TEXT',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e76',
                                    columnId: '0x10e74',
                                    cellType: 'LONG_TEXT',
                                    text: 'c'
                                  },
                                  {
                                    uid: '0x10e86',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e74',
                                        name: 'Notes',
                                        columnType: 'LONG_TEXT',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e77',
                                    columnId: '0x10e74',
                                    cellType: 'LONG_TEXT',
                                    text: 'd'
                                  },
                                  {
                                    uid: '0x10e87',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e74',
                                        name: 'Notes',
                                        columnType: 'LONG_TEXT',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e78',
                                    columnId: '0x10e74',
                                    cellType: 'LONG_TEXT',
                                    text: 'e'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e75',
                                name: 'Link to table 3',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e68',
                                foreignTableId: '0x10e79',
                                oneToOne: false,
                                symmetricColumnId: '0x10e88',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'blue',
                                    icon: 'untitle',
                                    uid: '0x10e68',
                                    name: 'Lookup Query Test'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e79',
                                    name: 'Table 3'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10e88',
                                    name: 'Table 2',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e68',
                                    foreignTableId: '0x10e71',
                                    oneToOne: false,
                                    symmetricColumnId: '0x10e75'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e98',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e75',
                                        name: 'Link to table 3',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e79',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e88'
                                      }
                                    ],
                                    rowId: '0x10e76',
                                    columnId: '0x10e75',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e7e'
                                      },
                                      {
                                        uid: '0x10e7f'
                                      },
                                      {
                                        uid: '0x10e80'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e9b',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e75',
                                        name: 'Link to table 3',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e79',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e88'
                                      }
                                    ],
                                    rowId: '0x10e77',
                                    columnId: '0x10e75',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e7f'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10ea0',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e75',
                                        name: 'Link to table 3',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e79',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e88'
                                      }
                                    ],
                                    rowId: '0x10e78',
                                    columnId: '0x10e75',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e7e'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e81',
                                name: 'Default',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e68',
                                foreignTableId: '0x10e69',
                                oneToOne: false,
                                symmetricColumnId: '0x10e6c',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'blue',
                                    icon: 'untitle',
                                    uid: '0x10e68',
                                    name: 'Lookup Query Test'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e69',
                                    name: 'Default'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10e6c',
                                    name: 'Notes',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e68',
                                    foreignTableId: '0x10e71',
                                    oneToOne: false,
                                    symmetricColumnId: '0x10e81'
                                  }
                                ],
                                has_lookup_column: [
                                  {
                                    uid: '0x10e89',
                                    name: 'Lookup name in tble 1',
                                    columnType: 'LOOKUP',
                                    isDefault: false,
                                    foreignLookupColumnId: '0x10e6b',
                                    recordReferenceColumnId: '0x10e81'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e8c',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e81',
                                        name: 'Default',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e69',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e6c'
                                      }
                                    ],
                                    rowId: '0x10e76',
                                    columnId: '0x10e81',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e6e'
                                      },
                                      {
                                        uid: '0x10e6f'
                                      },
                                      {
                                        uid: '0x10e70'
                                      },
                                      {
                                        uid: '0x11943'
                                      },
                                      {
                                        uid: '0x1194a'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e89',
                                name: 'Lookup name in tble 1',
                                columnType: 'LOOKUP',
                                isDefault: false,
                                foreignLookupColumnId: '0x10e6b',
                                recordReferenceColumnId: '0x10e81',
                                has_lookup_update: [
                                  {
                                    uid: '0x10e8a',
                                    name: 'Lookup Name from Table 2',
                                    columnType: 'LOOKUP',
                                    isDefault: false,
                                    foreignLookupColumnId: '0x10e89',
                                    recordReferenceColumnId: '0x10e88'
                                  }
                                ],
                                has_foreign_lookup_column: [
                                  {
                                    uid: '0x10e6b',
                                    name: 'Name',
                                    columnType: 'TEXT',
                                    isDefault: true
                                  }
                                ],
                                has_record_reference_column: [
                                  {
                                    uid: '0x10e81',
                                    name: 'Default',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e68',
                                    foreignTableId: '0x10e69',
                                    oneToOne: false,
                                    symmetricColumnId: '0x10e6c'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e8d',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e89',
                                        name: 'Lookup name in tble 1',
                                        columnType: 'LOOKUP',
                                        isDefault: false,
                                        foreignLookupColumnId: '0x10e6b',
                                        recordReferenceColumnId: '0x10e81'
                                      }
                                    ],
                                    rowId: '0x10e76',
                                    columnId: '0x10e89',
                                    has_lookup_cell: [
                                      {
                                        uid: '0x10e82',
                                        isDefault: true,
                                        rowId: '0x10e6e',
                                        columnId: '0x10e6b',
                                        cellType: 'TEXT',
                                        text: 'asdf'
                                      },
                                      {
                                        uid: '0x10e83',
                                        isDefault: true,
                                        rowId: '0x10e6f',
                                        columnId: '0x10e6b',
                                        cellType: 'TEXT',
                                        text: 'b'
                                      },
                                      {
                                        uid: '0x10e84',
                                        isDefault: true,
                                        rowId: '0x10e70',
                                        columnId: '0x10e6b',
                                        cellType: 'TEXT',
                                        text: 'c'
                                      },
                                      {
                                        uid: '0x11949',
                                        rowId: '0x11943',
                                        columnId: '0x10e6b'
                                      },
                                      {
                                        uid: '0x11950',
                                        rowId: '0x1194a',
                                        columnId: '0x10e6b'
                                      }
                                    ],
                                    cellType: 'LOOKUP'
                                  }
                                ]
                              }
                            ],
                            has_view: [
                              {
                                viewType: 'GRID',
                                'has_column|order': 0,
                                'has_row|order': 1,
                                uid: '0x10e72',
                                name: 'Grid View',
                                isDefault: true,
                                'has_view|order': 0
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e76',
                                has_cell: [
                                  {
                                    uid: '0x10e85',
                                    isDefault: false,
                                    rowId: '0x10e76',
                                    columnId: '0x10e74',
                                    cellType: 'LONG_TEXT',
                                    text: 'c'
                                  },
                                  {
                                    uid: '0x10e8c',
                                    isDefault: false,
                                    rowId: '0x10e76',
                                    columnId: '0x10e81',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e8d',
                                    isDefault: false,
                                    rowId: '0x10e76',
                                    columnId: '0x10e89',
                                    cellType: 'LOOKUP'
                                  },
                                  {
                                    uid: '0x10e90',
                                    isDefault: true,
                                    rowId: '0x10e76',
                                    columnId: '0x10e73',
                                    cellType: 'TEXT',
                                    text: 'c'
                                  },
                                  {
                                    uid: '0x10e98',
                                    isDefault: false,
                                    rowId: '0x10e76',
                                    columnId: '0x10e75',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e77',
                                has_cell: [
                                  {
                                    uid: '0x10e86',
                                    isDefault: false,
                                    rowId: '0x10e77',
                                    columnId: '0x10e74',
                                    cellType: 'LONG_TEXT',
                                    text: 'd'
                                  },
                                  {
                                    uid: '0x10e91',
                                    isDefault: true,
                                    rowId: '0x10e77',
                                    columnId: '0x10e73',
                                    cellType: 'TEXT',
                                    text: 'd'
                                  },
                                  {
                                    uid: '0x10e9b',
                                    isDefault: false,
                                    rowId: '0x10e77',
                                    columnId: '0x10e75',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e78',
                                has_cell: [
                                  {
                                    uid: '0x10e87',
                                    isDefault: false,
                                    rowId: '0x10e78',
                                    columnId: '0x10e74',
                                    cellType: 'LONG_TEXT',
                                    text: 'e'
                                  },
                                  {
                                    uid: '0x10e92',
                                    isDefault: true,
                                    rowId: '0x10e78',
                                    columnId: '0x10e73',
                                    cellType: 'TEXT',
                                    text: 'e'
                                  },
                                  {
                                    uid: '0x10ea0',
                                    isDefault: false,
                                    rowId: '0x10e78',
                                    columnId: '0x10e75',
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              }
                            ],
                            from_core: [
                              {
                                'has_table|order': 0,
                                color: 'blue',
                                icon: 'untitle',
                                uid: '0x10e68',
                                name: 'Lookup Query Test'
                              }
                            ],
                            uid: '0x10e71',
                            name: 'Table 2',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_table|order': 1
                          },
                          {
                            has_column: [
                              {
                                uid: '0x10e7b',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                has_cell: [
                                  {
                                    uid: '0x10e94',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e7b',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e7e',
                                    columnId: '0x10e7b',
                                    cellType: 'TEXT',
                                    text: 'e'
                                  },
                                  {
                                    uid: '0x10e95',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e7b',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e7f',
                                    columnId: '0x10e7b',
                                    cellType: 'TEXT',
                                    text: 'f'
                                  },
                                  {
                                    uid: '0x10e96',
                                    isDefault: true,
                                    from_column: [
                                      {
                                        uid: '0x10e7b',
                                        name: 'Name',
                                        columnType: 'TEXT',
                                        isDefault: true
                                      }
                                    ],
                                    rowId: '0x10e80',
                                    columnId: '0x10e7b',
                                    cellType: 'TEXT',
                                    text: 'g'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e7c',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                has_cell: [
                                  {
                                    uid: '0x10e93',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e7c',
                                        name: 'Notes',
                                        columnType: 'LONG_TEXT',
                                        isDefault: false
                                      }
                                    ],
                                    rowId: '0x10e7e',
                                    columnId: '0x10e7c',
                                    cellType: 'LONG_TEXT',
                                    text: ''
                                  }
                                ]
                              },
                              {
                                uid: '0x10e88',
                                name: 'Table 2',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e68',
                                foreignTableId: '0x10e71',
                                oneToOne: false,
                                symmetricColumnId: '0x10e75',
                                has_foreign_workspace: [
                                  {
                                    uid: '0x124',
                                    name: 'Caminer'
                                  }
                                ],
                                has_foreign_core: [
                                  {
                                    'has_table|order': 0,
                                    color: 'blue',
                                    icon: 'untitle',
                                    uid: '0x10e68',
                                    name: 'Lookup Query Test'
                                  }
                                ],
                                has_foreign_table: [
                                  {
                                    'has_view|order': 0,
                                    uid: '0x10e71',
                                    name: 'Table 2'
                                  }
                                ],
                                has_symmetric_column: [
                                  {
                                    uid: '0x10e75',
                                    name: 'Link to table 3',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e68',
                                    foreignTableId: '0x10e79',
                                    oneToOne: false,
                                    symmetricColumnId: '0x10e88'
                                  }
                                ],
                                has_lookup_column: [
                                  {
                                    uid: '0x10e8a',
                                    name: 'Lookup Name from Table 2',
                                    columnType: 'LOOKUP',
                                    isDefault: false,
                                    foreignLookupColumnId: '0x10e89',
                                    recordReferenceColumnId: '0x10e88'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e97',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e88',
                                        name: 'Table 2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e71',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e75'
                                      }
                                    ],
                                    rowId: '0x10e7e',
                                    columnId: '0x10e88',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e76'
                                      },
                                      {
                                        uid: '0x10e78'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e9a',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e88',
                                        name: 'Table 2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e71',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e75'
                                      }
                                    ],
                                    rowId: '0x10e7f',
                                    columnId: '0x10e88',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e76'
                                      },
                                      {
                                        uid: '0x10e77'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e9e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e88',
                                        name: 'Table 2',
                                        columnType: 'RECORD_REFERENCE',
                                        isDefault: false,
                                        foreignWorkspaceId: '0x124',
                                        foreignCoreId: '0x10e68',
                                        foreignTableId: '0x10e71',
                                        oneToOne: false,
                                        symmetricColumnId: '0x10e75'
                                      }
                                    ],
                                    rowId: '0x10e80',
                                    columnId: '0x10e88',
                                    has_foreign_row: [
                                      {
                                        uid: '0x10e76'
                                      }
                                    ],
                                    cellType: 'RECORD_REFERENCE'
                                  }
                                ]
                              },
                              {
                                uid: '0x10e8a',
                                name: 'Lookup Name from Table 2',
                                columnType: 'LOOKUP',
                                isDefault: false,
                                foreignLookupColumnId: '0x10e89',
                                recordReferenceColumnId: '0x10e88',
                                has_foreign_lookup_column: [
                                  {
                                    uid: '0x10e89',
                                    name: 'Lookup name in tble 1',
                                    columnType: 'LOOKUP',
                                    isDefault: false,
                                    foreignLookupColumnId: '0x10e6b',
                                    recordReferenceColumnId: '0x10e81'
                                  }
                                ],
                                has_record_reference_column: [
                                  {
                                    uid: '0x10e88',
                                    name: 'Table 2',
                                    columnType: 'RECORD_REFERENCE',
                                    isDefault: false,
                                    foreignWorkspaceId: '0x124',
                                    foreignCoreId: '0x10e68',
                                    foreignTableId: '0x10e71',
                                    oneToOne: false,
                                    symmetricColumnId: '0x10e75'
                                  }
                                ],
                                has_cell: [
                                  {
                                    uid: '0x10e99',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e8a',
                                        name: 'Lookup Name from Table 2',
                                        columnType: 'LOOKUP',
                                        isDefault: false,
                                        foreignLookupColumnId: '0x10e89',
                                        recordReferenceColumnId: '0x10e88'
                                      }
                                    ],
                                    rowId: '0x10e7e',
                                    columnId: '0x10e8a',
                                    has_lookup_cell: [
                                      {
                                        uid: '0x10e8d',
                                        isDefault: false,
                                        rowId: '0x10e76',
                                        columnId: '0x10e89',
                                        cellType: 'LOOKUP'
                                      },
                                      {
                                        uid: '0x10ea1',
                                        rowId: '0x10e78',
                                        columnId: '0x10e89'
                                      }
                                    ],
                                    cellType: 'LOOKUP'
                                  },
                                  {
                                    uid: '0x10e9c',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e8a',
                                        name: 'Lookup Name from Table 2',
                                        columnType: 'LOOKUP',
                                        isDefault: false,
                                        foreignLookupColumnId: '0x10e89',
                                        recordReferenceColumnId: '0x10e88'
                                      }
                                    ],
                                    rowId: '0x10e7f',
                                    columnId: '0x10e8a',
                                    has_lookup_cell: [
                                      {
                                        uid: '0x10e8d',
                                        isDefault: false,
                                        rowId: '0x10e76',
                                        columnId: '0x10e89',
                                        cellType: 'LOOKUP'
                                      },
                                      {
                                        uid: '0x10e9d',
                                        rowId: '0x10e77',
                                        columnId: '0x10e89'
                                      }
                                    ],
                                    cellType: 'LOOKUP'
                                  },
                                  {
                                    uid: '0x10e9f',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x10e8a',
                                        name: 'Lookup Name from Table 2',
                                        columnType: 'LOOKUP',
                                        isDefault: false,
                                        foreignLookupColumnId: '0x10e89',
                                        recordReferenceColumnId: '0x10e88'
                                      }
                                    ],
                                    rowId: '0x10e80',
                                    columnId: '0x10e8a',
                                    has_lookup_cell: [
                                      {
                                        uid: '0x10e8d',
                                        isDefault: false,
                                        rowId: '0x10e76',
                                        columnId: '0x10e89',
                                        cellType: 'LOOKUP'
                                      }
                                    ],
                                    cellType: 'LOOKUP'
                                  }
                                ]
                              },
                              {
                                uid: '0x11926',
                                name: 'Currency Column 0',
                                columnType: 'TEXT',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0,
                                currencyFormat: 'CHF',
                                has_cell: [
                                  {
                                    uid: '0x11927',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11926',
                                        name: 'Currency Column 0',
                                        columnType: 'TEXT',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'CHF'
                                      }
                                    ],
                                    rowId: '0x10e7e',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF23.0\n          '
                                  },
                                  {
                                    uid: '0x11928',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11926',
                                        name: 'Currency Column 0',
                                        columnType: 'TEXT',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'CHF'
                                      }
                                    ],
                                    rowId: '0x10e7f',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234.0\n          '
                                  },
                                  {
                                    uid: '0x11929',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11926',
                                        name: 'Currency Column 0',
                                        columnType: 'TEXT',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'CHF'
                                      }
                                    ],
                                    rowId: '0x10eea',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234,234.0\n          '
                                  },
                                  {
                                    uid: '0x1192a',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11926',
                                        name: 'Currency Column 0',
                                        columnType: 'TEXT',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'CHF'
                                      }
                                    ],
                                    rowId: '0x10e80',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234,234.0\n          '
                                  },
                                  {
                                    uid: '0x1192b',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11926',
                                        name: 'Currency Column 0',
                                        columnType: 'TEXT',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'CHF'
                                      }
                                    ],
                                    rowId: '0x10eec',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF23.0\n          '
                                  },
                                  {
                                    uid: '0x1192c',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11926',
                                        name: 'Currency Column 0',
                                        columnType: 'TEXT',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'CHF'
                                      }
                                    ],
                                    rowId: '0x10eeb',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234.0\n          '
                                  },
                                  {
                                    uid: '0x1192d',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11926',
                                        name: 'Currency Column 0',
                                        columnType: 'TEXT',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'CHF'
                                      }
                                    ],
                                    rowId: '0x10ef7',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF0.0\n          '
                                  },
                                  {
                                    uid: '0x1192e',
                                    isDefault: false,
                                    from_column: [
                                      {
                                        uid: '0x11926',
                                        name: 'Currency Column 0',
                                        columnType: 'TEXT',
                                        precision: 1,
                                        isDefault: false,
                                        defaultNumber: 0,
                                        currencyFormat: 'CHF'
                                      }
                                    ],
                                    rowId: '0x10eed',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234,234.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x1192f',
                                name: 'Currency Column 1',
                                columnType: 'CURRENCY',
                                precision: 0,
                                isDefault: false,
                                currencyFormat: '$'
                              },
                              {
                                uid: '0x11930',
                                name: 'Currency Column 10',
                                columnType: 'TEXT',
                                precision: 0,
                                isDefault: false,
                                defaultNumber: 10,
                                currencyFormat: '$'
                              }
                            ],
                            has_view: [
                              {
                                viewType: 'GRID',
                                'has_column|order': 0,
                                'has_row|order': 1,
                                uid: '0x10e7a',
                                name: 'Grid View',
                                isDefault: true,
                                'has_view|order': 0
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e7e',
                                has_cell: [
                                  {
                                    uid: '0x10e93',
                                    isDefault: false,
                                    rowId: '0x10e7e',
                                    columnId: '0x10e7c',
                                    cellType: 'LONG_TEXT',
                                    text: ''
                                  },
                                  {
                                    uid: '0x10e94',
                                    isDefault: true,
                                    rowId: '0x10e7e',
                                    columnId: '0x10e7b',
                                    cellType: 'TEXT',
                                    text: 'e'
                                  },
                                  {
                                    uid: '0x10e97',
                                    isDefault: false,
                                    rowId: '0x10e7e',
                                    columnId: '0x10e88',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e99',
                                    isDefault: false,
                                    rowId: '0x10e7e',
                                    columnId: '0x10e8a',
                                    cellType: 'LOOKUP'
                                  },
                                  {
                                    uid: '0x11927',
                                    isDefault: false,
                                    rowId: '0x10e7e',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF23.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x10e7f',
                                has_cell: [
                                  {
                                    uid: '0x10e95',
                                    isDefault: true,
                                    rowId: '0x10e7f',
                                    columnId: '0x10e7b',
                                    cellType: 'TEXT',
                                    text: 'f'
                                  },
                                  {
                                    uid: '0x10e9a',
                                    isDefault: false,
                                    rowId: '0x10e7f',
                                    columnId: '0x10e88',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e9c',
                                    isDefault: false,
                                    rowId: '0x10e7f',
                                    columnId: '0x10e8a',
                                    cellType: 'LOOKUP'
                                  },
                                  {
                                    uid: '0x11928',
                                    isDefault: false,
                                    rowId: '0x10e7f',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x10e80',
                                has_cell: [
                                  {
                                    uid: '0x10e96',
                                    isDefault: true,
                                    rowId: '0x10e80',
                                    columnId: '0x10e7b',
                                    cellType: 'TEXT',
                                    text: 'g'
                                  },
                                  {
                                    uid: '0x10e9e',
                                    isDefault: false,
                                    rowId: '0x10e80',
                                    columnId: '0x10e88',
                                    cellType: 'RECORD_REFERENCE'
                                  },
                                  {
                                    uid: '0x10e9f',
                                    isDefault: false,
                                    rowId: '0x10e80',
                                    columnId: '0x10e8a',
                                    cellType: 'LOOKUP'
                                  },
                                  {
                                    uid: '0x1192a',
                                    isDefault: false,
                                    rowId: '0x10e80',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234,234.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x10eea',
                                has_cell: [
                                  {
                                    uid: '0x11929',
                                    isDefault: false,
                                    rowId: '0x10eea',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234,234.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x10eeb',
                                has_cell: [
                                  {
                                    uid: '0x1192c',
                                    isDefault: false,
                                    rowId: '0x10eeb',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x10eec',
                                has_cell: [
                                  {
                                    uid: '0x1192b',
                                    isDefault: false,
                                    rowId: '0x10eec',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF23.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x10eed',
                                has_cell: [
                                  {
                                    uid: '0x1192e',
                                    isDefault: false,
                                    rowId: '0x10eed',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF234,234.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x10ef7',
                                has_cell: [
                                  {
                                    uid: '0x1192d',
                                    isDefault: false,
                                    rowId: '0x10ef7',
                                    columnId: '0x11926',
                                    cellType: 'TEXT',
                                    text: 'CHF0.0\n          '
                                  }
                                ]
                              },
                              {
                                uid: '0x10ef9'
                              },
                              {
                                uid: '0x10efb'
                              },
                              {
                                uid: '0x10efc'
                              },
                              {
                                uid: '0x10efd'
                              },
                              {
                                uid: '0x11903'
                              },
                              {
                                uid: '0x11904'
                              },
                              {
                                uid: '0x11905'
                              },
                              {
                                uid: '0x11906'
                              },
                              {
                                uid: '0x11908'
                              },
                              {
                                uid: '0x1190a'
                              },
                              {
                                uid: '0x1190c'
                              },
                              {
                                uid: '0x11922'
                              },
                              {
                                uid: '0x11924'
                              },
                              {
                                uid: '0x11931'
                              },
                              {
                                uid: '0x11932'
                              },
                              {
                                uid: '0x11933'
                              },
                              {
                                uid: '0x11934'
                              },
                              {
                                uid: '0x11935'
                              }
                            ],
                            from_core: [
                              {
                                'has_table|order': 0,
                                color: 'blue',
                                icon: 'untitle',
                                uid: '0x10e68',
                                name: 'Lookup Query Test'
                              }
                            ],
                            uid: '0x10e79',
                            name: 'Table 3',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ],
                            'has_table|order': 2
                          }
                        ],
                        color: 'blue',
                        icon: 'untitle',
                        from_workspace: [
                          {
                            uid: '0x124',
                            name: 'Caminer'
                          }
                        ],
                        uid: '0x10e68',
                        name: 'Lookup Query Test',
                        has_user_group: [
                          {
                            color: 'N/A',
                            icon: 'N/A',
                            uid: '0x126',
                            name: 'Admin',
                            role: 'ADMIN'
                          }
                        ]
                      },
                      {
                        'has_table|order': 0,
                        color: 'blue',
                        icon: 'untitle',
                        uid: '0x11951',
                        name: 'Test'
                      }
                    ],
                    uid: '0x124',
                    name: 'Caminer',
                    has_user_group: [
                      {
                        color: 'N/A',
                        icon: 'N/A',
                        uid: '0x125',
                        name: 'Owner',
                        has_user: [
                          {
                            uid: '0x1',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x125',
                                name: 'Owner',
                                role: 'OWNER'
                              },
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              },
                              {
                                color: '',
                                icon: '',
                                uid: '0x3b0c',
                                name: '',
                                role: 'INDIVIDUAL'
                              }
                            ]
                          }
                        ],
                        role: 'OWNER'
                      },
                      {
                        has_table: [
                          {
                            'has_view|order': 0,
                            uid: '0xdb37',
                            name: 'Default'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x10325',
                            name: 'Table 2'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x10356',
                            name: 'Default'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x10e1a',
                            name: 'Default'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x10e22',
                            name: 'Table 2'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x10e69',
                            name: 'Default'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x10e71',
                            name: 'Table 2'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x10e79',
                            name: 'Table 3'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x11952',
                            name: 'Default'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x11961',
                            name: 'Table 2'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x1198f',
                            name: 'Table 3'
                          },
                          {
                            'has_view|order': 0,
                            uid: '0x119c4',
                            name: 'Table 4'
                          }
                        ],
                        has_core: [
                          {
                            'has_table|order': 0,
                            color: 'red',
                            icon: 'untitle',
                            uid: '0xdb36',
                            name: 'Tester'
                          },
                          {
                            'has_table|order': 0,
                            color: 'blue',
                            icon: 'untitle',
                            uid: '0x10355',
                            name: 'One to one Test'
                          },
                          {
                            'has_table|order': 0,
                            color: 'red',
                            icon: 'untitle',
                            uid: '0x10e19',
                            name: 'Tester'
                          },
                          {
                            'has_table|order': 0,
                            color: 'blue',
                            icon: 'untitle',
                            uid: '0x10e68',
                            name: 'Lookup Query Test'
                          },
                          {
                            'has_table|order': 0,
                            color: 'blue',
                            icon: 'untitle',
                            uid: '0x11951',
                            name: 'Test'
                          }
                        ],
                        color: 'N/A',
                        icon: 'N/A',
                        has_view: [
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0xdb39',
                                name: 'Name',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: true,
                                defaultNumber: 0,
                                'has_column|order': 0
                              },
                              {
                                uid: '0xdb3a',
                                name: 'Notes',
                                columnType: 'DATETIME',
                                isDefault: false,
                                useGMT: false,
                                timeFormat: 'TWELVE_HOUR',
                                includeTime: false,
                                dateFormat: 'LOCAL',
                                'has_column|order': 1
                              },
                              {
                                uid: '0xdb3c',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false,
                                'has_column|order': 2
                              },
                              {
                                uid: '0x1033c',
                                name: 'Test',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0x10325',
                                oneToOne: false,
                                symmetricColumnId: '0x1033d',
                                'has_column|order': 3
                              },
                              {
                                uid: '0x10343',
                                name: 'Test Unique',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0x10325',
                                oneToOne: true,
                                symmetricColumnId: '0x10344',
                                'has_column|order': 4
                              }
                            ],
                            has_row: [
                              {
                                uid: '0xdb3d',
                                'has_row|order': 1
                              },
                              {
                                uid: '0xdb3e',
                                'has_row|order': 2
                              },
                              {
                                uid: '0xdb3f',
                                'has_row|order': 3
                              },
                              {
                                uid: '0xe527',
                                'has_row|order': 4
                              },
                              {
                                uid: '0xe529',
                                'has_row|order': 5
                              },
                              {
                                uid: '0xe52b',
                                'has_row|order': 6
                              },
                              {
                                uid: '0xe52d',
                                'has_row|order': 7
                              },
                              {
                                uid: '0xe52f',
                                'has_row|order': 8
                              },
                              {
                                uid: '0xe531',
                                'has_row|order': 9
                              },
                              {
                                uid: '0x102fd',
                                'has_row|order': 10
                              },
                              {
                                uid: '0x102ff',
                                'has_row|order': 11
                              },
                              {
                                uid: '0x10301',
                                'has_row|order': 12
                              },
                              {
                                uid: '0x10303',
                                'has_row|order': 13
                              },
                              {
                                uid: '0x10305',
                                'has_row|order': 14
                              },
                              {
                                uid: '0x10307',
                                'has_row|order': 15
                              },
                              {
                                uid: '0x10309',
                                'has_row|order': 16
                              },
                              {
                                uid: '0x1030b',
                                'has_row|order': 17
                              },
                              {
                                uid: '0x1030d',
                                'has_row|order': 18
                              },
                              {
                                uid: '0x1030f',
                                'has_row|order': 19
                              },
                              {
                                uid: '0x10319',
                                'has_row|order': 24
                              },
                              {
                                uid: '0x1031b',
                                'has_row|order': 25
                              },
                              {
                                uid: '0x1031f',
                                'has_row|order': 26
                              },
                              {
                                uid: '0x10321',
                                'has_row|order': 27
                              },
                              {
                                uid: '0x10323',
                                'has_row|order': 28
                              },
                              {
                                uid: '0x10350',
                                'has_row|order': 29
                              }
                            ],
                            uid: '0xdb38',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x10327',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                'has_column|order': 0
                              },
                              {
                                uid: '0x10328',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                'has_column|order': 1
                              },
                              {
                                uid: '0x10329',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false,
                                'has_column|order': 2
                              },
                              {
                                uid: '0x1033d',
                                name: 'Default',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0xdb37',
                                oneToOne: false,
                                symmetricColumnId: '0x1033c',
                                'has_column|order': 3
                              },
                              {
                                uid: '0x10344',
                                name: 'Default (1)',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0xdb37',
                                oneToOne: true,
                                symmetricColumnId: '0x10343',
                                'has_column|order': 4
                              },
                              {
                                uid: '0x10e2b',
                                name: 'Default (2)',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e1a',
                                oneToOne: false,
                                symmetricColumnId: '0x10e2a',
                                'has_column|order': 5
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x1032a',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x1032b',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x1032c',
                                'has_row|order': 3
                              },
                              {
                                uid: '0x1032f',
                                'has_row|order': 4
                              },
                              {
                                uid: '0x10330',
                                'has_row|order': 5
                              },
                              {
                                uid: '0x10334',
                                'has_row|order': 6
                              },
                              {
                                uid: '0x10338',
                                'has_row|order': 7
                              }
                            ],
                            uid: '0x10326',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x10358',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                'has_column|order': 0
                              },
                              {
                                uid: '0x10359',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                'has_column|order': 1
                              },
                              {
                                uid: '0x1035a',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false,
                                'has_column|order': 2
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x1035b',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x1035d',
                                'has_row|order': 3
                              },
                              {
                                uid: '0x10397',
                                'has_row|order': 6
                              }
                            ],
                            uid: '0x10357',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x10e1c',
                                name: 'Name',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: true,
                                defaultNumber: 0,
                                'has_column|order': 0
                              },
                              {
                                uid: '0x10e1d',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                'has_column|order': 1
                              },
                              {
                                uid: '0x10e1e',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false,
                                'has_column|order': 2
                              },
                              {
                                uid: '0x10e2a',
                                name: 'Field1',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0xdb36',
                                foreignTableId: '0x10325',
                                oneToOne: true,
                                symmetricColumnId: '0x10e2b',
                                'has_column|order': 3
                              },
                              {
                                uid: '0x10e32',
                                name: 'Field2',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e22',
                                oneToOne: true,
                                symmetricColumnId: '0x10e33',
                                'has_column|order': 4
                              },
                              {
                                uid: '0x10e67',
                                name: 'Currency Test',
                                columnType: 'CURRENCY',
                                precision: 0,
                                isDefault: false,
                                defaultNumber: 0,
                                currencyFormat: 'USD',
                                'has_column|order': 5
                              },
                              {
                                uid: '0x10ea2',
                                name: '2332Field 7',
                                columnType: 'CURRENCY',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0,
                                currencyFormat: 'USD',
                                'has_column|order': 6
                              },
                              {
                                uid: '0x10ea3',
                                name: 'Number',
                                columnType: 'CURRENCY',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0,
                                currencyFormat: 'USD',
                                'has_column|order': 7
                              },
                              {
                                uid: '0x10ec5',
                                name: 'f f f',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x10ea3',
                                'has_column|order': 8
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e1f',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x10e20',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x10e21',
                                'has_row|order': 3
                              },
                              {
                                uid: '0x10e62',
                                'has_row|order': 4
                              },
                              {
                                uid: '0x10e63',
                                'has_row|order': 5
                              },
                              {
                                uid: '0x10e64',
                                'has_row|order': 6
                              },
                              {
                                uid: '0x10e65',
                                'has_row|order': 7
                              },
                              {
                                uid: '0x10e66',
                                'has_row|order': 8
                              }
                            ],
                            uid: '0x10e1b',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x10e24',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                'has_column|order': 0
                              },
                              {
                                uid: '0x10e25',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                'has_column|order': 1
                              },
                              {
                                uid: '0x10e26',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false,
                                'has_column|order': 2
                              },
                              {
                                uid: '0x10e33',
                                name: 'Default',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e1a',
                                oneToOne: true,
                                symmetricColumnId: '0x10e32',
                                'has_column|order': 3
                              },
                              {
                                uid: '0x10e40',
                                name: 'self',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e22',
                                oneToOne: false,
                                'has_column|order': 4
                              },
                              {
                                uid: '0x10e4f',
                                name: 'self2',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e19',
                                foreignTableId: '0x10e22',
                                oneToOne: false,
                                'has_column|order': 5
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e27',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x10e28',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x10e29',
                                'has_row|order': 3
                              }
                            ],
                            uid: '0x10e23',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x10e6b',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                'has_column|order': 0
                              },
                              {
                                uid: '0x10e6c',
                                name: 'Notes',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e68',
                                foreignTableId: '0x10e71',
                                oneToOne: false,
                                symmetricColumnId: '0x10e81',
                                'has_column|order': 1
                              },
                              {
                                uid: '0x10ece',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 4,
                                isDefault: false,
                                'has_column|order': 3
                              },
                              {
                                uid: '0x10edc',
                                name: 'Field 523',
                                columnType: 'CHECKBOX',
                                isDefault: false,
                                'has_column|order': 4
                              },
                              {
                                uid: '0x11936',
                                name: 'fff',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x10ece+1',
                                'has_column|order': 5
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e6e',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x11943',
                                'has_row|order': 1.5
                              },
                              {
                                uid: '0x1194a',
                                'has_row|order': 1.75
                              },
                              {
                                uid: '0x10e6f',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x10e70',
                                'has_row|order': 3
                              },
                              {
                                uid: '0x10ed2',
                                'has_row|order': 4
                              },
                              {
                                uid: '0x10ed3',
                                'has_row|order': 5
                              },
                              {
                                uid: '0x10ed4',
                                'has_row|order': 6
                              },
                              {
                                uid: '0x10ed8',
                                'has_row|order': 7
                              },
                              {
                                uid: '0x10ed9',
                                'has_row|order': 8
                              },
                              {
                                uid: '0x10eda',
                                'has_row|order': 9
                              },
                              {
                                uid: '0x10edb',
                                'has_row|order': 10
                              },
                              {
                                uid: '0x10ee0',
                                'has_row|order': 11
                              },
                              {
                                uid: '0x10ee1',
                                'has_row|order': 12
                              }
                            ],
                            uid: '0x10e6a',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x10e73',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                'has_column|order': 0
                              },
                              {
                                uid: '0x10e74',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                'has_column|order': 1
                              },
                              {
                                uid: '0x10e75',
                                name: 'Link to table 3',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e68',
                                foreignTableId: '0x10e79',
                                oneToOne: false,
                                symmetricColumnId: '0x10e88',
                                'has_column|order': 2
                              },
                              {
                                uid: '0x10e81',
                                name: 'Default',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e68',
                                foreignTableId: '0x10e69',
                                oneToOne: false,
                                symmetricColumnId: '0x10e6c',
                                'has_column|order': 3
                              },
                              {
                                uid: '0x10e89',
                                name: 'Lookup name in tble 1',
                                columnType: 'LOOKUP',
                                isDefault: false,
                                foreignLookupColumnId: '0x10e6b',
                                recordReferenceColumnId: '0x10e81',
                                'has_column|order': 4
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e76',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x10e77',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x10e78',
                                'has_row|order': 3
                              }
                            ],
                            uid: '0x10e72',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x10e7b',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                'has_column|order': 0
                              },
                              {
                                uid: '0x10e7c',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                'has_column|order': 1
                              },
                              {
                                uid: '0x10e88',
                                name: 'Table 2',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x10e68',
                                foreignTableId: '0x10e71',
                                oneToOne: false,
                                symmetricColumnId: '0x10e75',
                                'has_column|order': 3
                              },
                              {
                                uid: '0x10e8a',
                                name: 'Lookup Name from Table 2',
                                columnType: 'LOOKUP',
                                isDefault: false,
                                foreignLookupColumnId: '0x10e89',
                                recordReferenceColumnId: '0x10e88',
                                'has_column|order': 4
                              },
                              {
                                uid: '0x11926',
                                name: 'Currency Column 0',
                                columnType: 'TEXT',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0,
                                currencyFormat: 'CHF',
                                'has_column|order': 5
                              },
                              {
                                uid: '0x1192f',
                                name: 'Currency Column 1',
                                columnType: 'CURRENCY',
                                precision: 0,
                                isDefault: false,
                                currencyFormat: '$',
                                'has_column|order': 6
                              },
                              {
                                uid: '0x11930',
                                name: 'Currency Column 10',
                                columnType: 'TEXT',
                                precision: 0,
                                isDefault: false,
                                defaultNumber: 10,
                                currencyFormat: '$',
                                'has_column|order': 7
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x10e7e',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x10e7f',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x10e80',
                                'has_row|order': 3
                              },
                              {
                                uid: '0x10eea',
                                'has_row|order': 4
                              },
                              {
                                uid: '0x10eeb',
                                'has_row|order': 5
                              },
                              {
                                uid: '0x10eec',
                                'has_row|order': 6
                              },
                              {
                                uid: '0x10eed',
                                'has_row|order': 7
                              },
                              {
                                uid: '0x10ef7',
                                'has_row|order': 8
                              },
                              {
                                uid: '0x10ef9',
                                'has_row|order': 9
                              },
                              {
                                uid: '0x10efb',
                                'has_row|order': 10
                              },
                              {
                                uid: '0x10efc',
                                'has_row|order': 11
                              },
                              {
                                uid: '0x10efd',
                                'has_row|order': 12
                              },
                              {
                                uid: '0x11903',
                                'has_row|order': 13
                              },
                              {
                                uid: '0x11904',
                                'has_row|order': 14
                              },
                              {
                                uid: '0x11905',
                                'has_row|order': 15
                              },
                              {
                                uid: '0x11906',
                                'has_row|order': 16
                              },
                              {
                                uid: '0x11908',
                                'has_row|order': 17
                              },
                              {
                                uid: '0x1190a',
                                'has_row|order': 18
                              },
                              {
                                uid: '0x1190c',
                                'has_row|order': 19
                              },
                              {
                                uid: '0x11922',
                                'has_row|order': 20
                              },
                              {
                                uid: '0x11924',
                                'has_row|order': 21
                              },
                              {
                                uid: '0x11931',
                                'has_row|order': 22
                              },
                              {
                                uid: '0x11932',
                                'has_row|order': 23
                              },
                              {
                                uid: '0x11933',
                                'has_row|order': 24
                              },
                              {
                                uid: '0x11934',
                                'has_row|order': 25
                              },
                              {
                                uid: '0x11935',
                                'has_row|order': 26
                              }
                            ],
                            uid: '0x10e7a',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            'has_column|order': 0,
                            'has_row|order': 1,
                            uid: '0x11953',
                            name: 'Grid View',
                            isDefault: true
                          },
                          {
                            viewType: 'GRID',
                            'has_column|order': 0,
                            'has_row|order': 1,
                            uid: '0x11962',
                            name: 'Grid View',
                            isDefault: true
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x11991',
                                name: 'Name',
                                columnType: 'FORMULA',
                                isDefault: true,
                                formula: '$column_value_0x119e0',
                                'has_column|order': 0
                              },
                              {
                                uid: '0x11992',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                'has_column|order': 1
                              },
                              {
                                uid: '0x11997',
                                name: 'Table 2',
                                columnType: 'RECORD_REFERENCE',
                                isDefault: false,
                                foreignWorkspaceId: '0x124',
                                foreignCoreId: '0x11951',
                                foreignTableId: '0x11961',
                                oneToOne: false,
                                symmetricColumnId: '0x11964',
                                'has_column|order': 3
                              },
                              {
                                uid: '0x11998',
                                name: 'Rollup ROllup',
                                columnType: 'ROLLUP',
                                isDefault: false,
                                formula: '$column_value_0x1196c',
                                recordReferenceColumnId: '0x11997',
                                'has_column|order': 4
                              },
                              {
                                uid: '0x119a1',
                                name: 'Formula a Rollup',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x11998 & "Second Layer"',
                                'has_column|order': 5
                              },
                              {
                                uid: '0x119a5',
                                name: 'Lookup lookup',
                                columnType: 'LOOKUP',
                                isDefault: false,
                                foreignLookupColumnId: '0x1196b',
                                recordReferenceColumnId: '0x11997',
                                'has_column|order': 6
                              },
                              {
                                uid: '0x119d8',
                                name: 'Sum of Sum of ROllup',
                                columnType: 'ROLLUP',
                                isDefault: false,
                                formula: 'SUM($column_value_0x119d4)',
                                recordReferenceColumnId: '0x11997',
                                'has_column|order': 7
                              },
                              {
                                uid: '0x119dc',
                                name: 'rollup + 10',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x119d8+10',
                                'has_column|order': 8
                              },
                              {
                                uid: '0x119e0',
                                name: 'Formula of formula',
                                columnType: 'FORMULA',
                                isDefault: false,
                                formula: '$column_value_0x119dc & "WGia"',
                                'has_column|order': 9
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x11994',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x11995',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x11996',
                                'has_row|order': 3
                              }
                            ],
                            uid: '0x11990',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          },
                          {
                            viewType: 'GRID',
                            has_column: [
                              {
                                uid: '0x119c6',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true,
                                'has_column|order': 0
                              },
                              {
                                uid: '0x119c7',
                                name: 'Notes',
                                columnType: 'LONG_TEXT',
                                isDefault: false,
                                'has_column|order': 1
                              },
                              {
                                uid: '0x119c8',
                                name: 'Attachment',
                                columnType: 'MULTI_ATTACHMENT',
                                isDefault: false,
                                'has_column|order': 2
                              }
                            ],
                            has_row: [
                              {
                                uid: '0x119c9',
                                'has_row|order': 1
                              },
                              {
                                uid: '0x119ca',
                                'has_row|order': 2
                              },
                              {
                                uid: '0x119cb',
                                'has_row|order': 3
                              }
                            ],
                            uid: '0x119c5',
                            name: 'Grid View',
                            isDefault: true,
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              }
                            ]
                          }
                        ],
                        uid: '0x126',
                        name: 'Admin',
                        has_user: [
                          {
                            uid: '0x1',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x125',
                                name: 'Owner',
                                role: 'OWNER'
                              },
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              },
                              {
                                color: '',
                                icon: '',
                                uid: '0x3b0c',
                                name: '',
                                role: 'INDIVIDUAL'
                              }
                            ]
                          }
                        ],
                        role: 'ADMIN'
                      },
                      {
                        has_core: [
                          {
                            'has_table|order': 0,
                            color: 'blue',
                            icon: 'untitle',
                            uid: '0x10355',
                            name: 'One to one Test'
                          }
                        ],
                        color: '',
                        icon: '',
                        uid: '0x3b0c',
                        name: '',
                        has_user: [
                          {
                            uid: '0x1',
                            has_user_group: [
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x125',
                                name: 'Owner',
                                role: 'OWNER'
                              },
                              {
                                color: 'N/A',
                                icon: 'N/A',
                                uid: '0x126',
                                name: 'Admin',
                                role: 'ADMIN'
                              },
                              {
                                color: '',
                                icon: '',
                                uid: '0x3b0c',
                                name: '',
                                role: 'INDIVIDUAL'
                              }
                            ]
                          }
                        ],
                        role: 'INDIVIDUAL'
                      }
                    ]
                  }
                ],
                has_foreign_core: [
                  {
                    has_table: [
                      {
                        'has_view|order': 0,
                        uid: '0x11952',
                        name: 'Default',
                        'has_table|order': 0
                      },
                      {
                        'has_view|order': 0,
                        uid: '0x11961',
                        name: 'Table 2',
                        'has_table|order': 1
                      },
                      {
                        has_column: [
                          {
                            uid: '0x11991',
                            name: 'Name',
                            columnType: 'FORMULA',
                            isDefault: true,
                            formula: '$column_value_0x119e0',
                            has_cell: [
                              {
                                uid: '0x119c1',
                                isDefault: true,
                                from_column: [
                                  {
                                    uid: '0x11991',
                                    name: 'Name',
                                    columnType: 'FORMULA',
                                    isDefault: true,
                                    formula: '$column_value_0x119e0'
                                  }
                                ],
                                rowId: '0x11994',
                                columnId: '0x11991',
                                cellType: 'FORMULA',
                                text: 'a',
                                result: '6052WGia'
                              },
                              {
                                uid: '0x119c2',
                                isDefault: true,
                                from_column: [
                                  {
                                    uid: '0x11991',
                                    name: 'Name',
                                    columnType: 'FORMULA',
                                    isDefault: true,
                                    formula: '$column_value_0x119e0'
                                  }
                                ],
                                rowId: '0x11995',
                                columnId: '0x11991',
                                cellType: 'FORMULA',
                                text: 'b',
                                result: '6052WGia'
                              },
                              {
                                uid: '0x119c3',
                                isDefault: true,
                                from_column: [
                                  {
                                    uid: '0x11991',
                                    name: 'Name',
                                    columnType: 'FORMULA',
                                    isDefault: true,
                                    formula: '$column_value_0x119e0'
                                  }
                                ],
                                rowId: '0x11996',
                                columnId: '0x11991',
                                cellType: 'FORMULA',
                                text: 'c',
                                result: '6197WGia'
                              }
                            ]
                          },
                          {
                            uid: '0x11992',
                            name: 'Notes',
                            columnType: 'LONG_TEXT',
                            isDefault: false
                          },
                          {
                            uid: '0x11997',
                            name: 'Table 2',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x11964'
                          },
                          {
                            uid: '0x11998',
                            name: 'Rollup ROllup',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: '$column_value_0x1196c',
                            recordReferenceColumnId: '0x11997'
                          },
                          {
                            uid: '0x119a1',
                            name: 'Formula a Rollup',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x11998 & "Second Layer"'
                          },
                          {
                            uid: '0x119a5',
                            name: 'Lookup lookup',
                            columnType: 'LOOKUP',
                            isDefault: false,
                            foreignLookupColumnId: '0x1196b',
                            recordReferenceColumnId: '0x11997'
                          },
                          {
                            uid: '0x119d8',
                            name: 'Sum of Sum of ROllup',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: 'SUM($column_value_0x119d4)',
                            recordReferenceColumnId: '0x11997'
                          },
                          {
                            uid: '0x119dc',
                            name: 'rollup + 10',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x119d8+10'
                          },
                          {
                            uid: '0x119e0',
                            name: 'Formula of formula',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x119dc & "WGia"',
                            from_formula_column: [
                              {
                                uid: '0x11991',
                                name: 'Name',
                                columnType: 'FORMULA',
                                isDefault: true,
                                formula: '$column_value_0x119e0'
                              }
                            ],
                            has_cell: [
                              {
                                uid: '0x119e1',
                                isDefault: false,
                                from_column: [
                                  {
                                    uid: '0x119e0',
                                    name: 'Formula of formula',
                                    columnType: 'FORMULA',
                                    isDefault: false,
                                    formula: '$column_value_0x119dc & "WGia"'
                                  }
                                ],
                                rowId: '0x11994',
                                columnId: '0x119e0',
                                cellType: 'FORMULA',
                                result: '6052WGia'
                              },
                              {
                                uid: '0x119e2',
                                isDefault: false,
                                from_column: [
                                  {
                                    uid: '0x119e0',
                                    name: 'Formula of formula',
                                    columnType: 'FORMULA',
                                    isDefault: false,
                                    formula: '$column_value_0x119dc & "WGia"'
                                  }
                                ],
                                rowId: '0x11995',
                                columnId: '0x119e0',
                                cellType: 'FORMULA',
                                result: '6052WGia'
                              },
                              {
                                uid: '0x119e3',
                                isDefault: false,
                                from_column: [
                                  {
                                    uid: '0x119e0',
                                    name: 'Formula of formula',
                                    columnType: 'FORMULA',
                                    isDefault: false,
                                    formula: '$column_value_0x119dc & "WGia"'
                                  }
                                ],
                                rowId: '0x11996',
                                columnId: '0x119e0',
                                cellType: 'FORMULA',
                                result: '6197WGia'
                              }
                            ]
                          }
                        ],
                        has_view: [
                          {
                            viewType: 'GRID',
                            'has_column|order': 0,
                            'has_row|order': 1,
                            uid: '0x11990',
                            name: 'Grid View',
                            isDefault: true,
                            'has_view|order': 0
                          }
                        ],
                        has_row: [
                          {
                            uid: '0x11994',
                            has_cell: [
                              {
                                uid: '0x11999',
                                isDefault: false,
                                rowId: '0x11994',
                                columnId: '0x11998',
                                cellType: 'ROLLUP',
                                result: 'asdf, 2323, e, f, g'
                              },
                              {
                                uid: '0x1199c',
                                isDefault: false,
                                rowId: '0x11994',
                                columnId: '0x11997',
                                cellType: 'RECORD_REFERENCE'
                              },
                              {
                                uid: '0x119a2',
                                isDefault: false,
                                rowId: '0x11994',
                                columnId: '0x119a1',
                                cellType: 'FORMULA',
                                result: 'asdf, 2323, e, f, gSecond Layer'
                              },
                              {
                                uid: '0x119a6',
                                isDefault: false,
                                rowId: '0x11994',
                                columnId: '0x119a5',
                                cellType: 'LOOKUP'
                              },
                              {
                                uid: '0x119c1',
                                isDefault: true,
                                rowId: '0x11994',
                                columnId: '0x11991',
                                cellType: 'FORMULA',
                                text: 'a',
                                result: '6052WGia'
                              },
                              {
                                uid: '0x119d9',
                                isDefault: false,
                                rowId: '0x11994',
                                columnId: '0x119d8',
                                cellType: 'ROLLUP',
                                result: '6042'
                              },
                              {
                                uid: '0x119dd',
                                isDefault: false,
                                rowId: '0x11994',
                                columnId: '0x119dc',
                                cellType: 'FORMULA',
                                result: '6052'
                              },
                              {
                                uid: '0x119e1',
                                isDefault: false,
                                rowId: '0x11994',
                                columnId: '0x119e0',
                                cellType: 'FORMULA',
                                result: '6052WGia'
                              }
                            ]
                          },
                          {
                            uid: '0x11995',
                            has_cell: [
                              {
                                uid: '0x1199a',
                                isDefault: false,
                                rowId: '0x11995',
                                columnId: '0x11998',
                                cellType: 'ROLLUP',
                                result: 'asdf, 2323, e, f, g'
                              },
                              {
                                uid: '0x1199e',
                                isDefault: false,
                                rowId: '0x11995',
                                columnId: '0x11997',
                                cellType: 'RECORD_REFERENCE'
                              },
                              {
                                uid: '0x119a3',
                                isDefault: false,
                                rowId: '0x11995',
                                columnId: '0x119a1',
                                cellType: 'FORMULA',
                                result: 'asdf, 2323, e, f, gSecond Layer'
                              },
                              {
                                uid: '0x119a7',
                                isDefault: false,
                                rowId: '0x11995',
                                columnId: '0x119a5',
                                cellType: 'LOOKUP'
                              },
                              {
                                uid: '0x119c2',
                                isDefault: true,
                                rowId: '0x11995',
                                columnId: '0x11991',
                                cellType: 'FORMULA',
                                text: 'b',
                                result: '6052WGia'
                              },
                              {
                                uid: '0x119da',
                                isDefault: false,
                                rowId: '0x11995',
                                columnId: '0x119d8',
                                cellType: 'ROLLUP',
                                result: '6042'
                              },
                              {
                                uid: '0x119de',
                                isDefault: false,
                                rowId: '0x11995',
                                columnId: '0x119dc',
                                cellType: 'FORMULA',
                                result: '6052'
                              },
                              {
                                uid: '0x119e2',
                                isDefault: false,
                                rowId: '0x11995',
                                columnId: '0x119e0',
                                cellType: 'FORMULA',
                                result: '6052WGia'
                              }
                            ]
                          },
                          {
                            uid: '0x11996',
                            has_cell: [
                              {
                                uid: '0x1199b',
                                isDefault: false,
                                rowId: '0x11996',
                                columnId: '0x11998',
                                cellType: 'ROLLUP',
                                result: 'asdf, 2323, e, f, g, 2323, e, h'
                              },
                              {
                                uid: '0x1199f',
                                isDefault: false,
                                rowId: '0x11996',
                                columnId: '0x11997',
                                cellType: 'RECORD_REFERENCE'
                              },
                              {
                                uid: '0x119a4',
                                isDefault: false,
                                rowId: '0x11996',
                                columnId: '0x119a1',
                                cellType: 'FORMULA',
                                result: 'asdf, 2323, e, f, g, 2323, e, hSecond Layer'
                              },
                              {
                                uid: '0x119a8',
                                isDefault: false,
                                rowId: '0x11996',
                                columnId: '0x119a5',
                                cellType: 'LOOKUP'
                              },
                              {
                                uid: '0x119c3',
                                isDefault: true,
                                rowId: '0x11996',
                                columnId: '0x11991',
                                cellType: 'FORMULA',
                                text: 'c',
                                result: '6197WGia'
                              },
                              {
                                uid: '0x119db',
                                isDefault: false,
                                rowId: '0x11996',
                                columnId: '0x119d8',
                                cellType: 'ROLLUP',
                                result: '6187'
                              },
                              {
                                uid: '0x119df',
                                isDefault: false,
                                rowId: '0x11996',
                                columnId: '0x119dc',
                                cellType: 'FORMULA',
                                result: '6197'
                              },
                              {
                                uid: '0x119e3',
                                isDefault: false,
                                rowId: '0x11996',
                                columnId: '0x119e0',
                                cellType: 'FORMULA',
                                result: '6197WGia'
                              }
                            ]
                          }
                        ],
                        from_core: [
                          {
                            'has_table|order': 0,
                            color: 'blue',
                            icon: 'untitle',
                            uid: '0x11951',
                            name: 'Test'
                          }
                        ],
                        uid: '0x1198f',
                        name: 'Table 3',
                        has_user_group: [
                          {
                            color: 'N/A',
                            icon: 'N/A',
                            uid: '0x126',
                            name: 'Admin',
                            role: 'ADMIN'
                          }
                        ],
                        'has_table|order': 2
                      },
                      {
                        has_column: [
                          {
                            uid: '0x119c6',
                            name: 'Name',
                            columnType: 'TEXT',
                            isDefault: true
                          },
                          {
                            uid: '0x119c7',
                            name: 'Notes',
                            columnType: 'LONG_TEXT',
                            isDefault: false
                          },
                          {
                            uid: '0x119c8',
                            name: 'Attachment',
                            columnType: 'MULTI_ATTACHMENT',
                            isDefault: false
                          }
                        ],
                        has_view: [
                          {
                            viewType: 'GRID',
                            'has_column|order': 0,
                            'has_row|order': 1,
                            uid: '0x119c5',
                            name: 'Grid View',
                            isDefault: true,
                            'has_view|order': 0
                          }
                        ],
                        has_row: [
                          {
                            uid: '0x119c9'
                          },
                          {
                            uid: '0x119ca'
                          },
                          {
                            uid: '0x119cb'
                          }
                        ],
                        from_core: [
                          {
                            'has_table|order': 0,
                            color: 'blue',
                            icon: 'untitle',
                            uid: '0x11951',
                            name: 'Test'
                          }
                        ],
                        uid: '0x119c4',
                        name: 'Table 4',
                        has_user_group: [
                          {
                            color: 'N/A',
                            icon: 'N/A',
                            uid: '0x126',
                            name: 'Admin',
                            role: 'ADMIN'
                          }
                        ],
                        'has_table|order': 3
                      }
                    ],
                    color: 'blue',
                    icon: 'untitle',
                    from_workspace: [
                      {
                        uid: '0x124',
                        name: 'Caminer'
                      }
                    ],
                    uid: '0x11951',
                    name: 'Test',
                    has_user_group: [
                      {
                        color: 'N/A',
                        icon: 'N/A',
                        uid: '0x126',
                        name: 'Admin',
                        role: 'ADMIN'
                      }
                    ]
                  }
                ],
                has_foreign_table: [
                  {
                    has_column: [
                      {
                        uid: '0x11954',
                        name: 'Name',
                        columnType: 'TEXT',
                        isDefault: true,
                        has_cell: [
                          {
                            uid: '0x11970',
                            isDefault: true,
                            from_column: [
                              {
                                uid: '0x11954',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true
                              }
                            ],
                            rowId: '0x11957',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa'
                          },
                          {
                            uid: '0x11971',
                            isDefault: true,
                            from_column: [
                              {
                                uid: '0x11954',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true
                              }
                            ],
                            rowId: '0x11958',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa2'
                          },
                          {
                            uid: '0x11972',
                            isDefault: true,
                            from_column: [
                              {
                                uid: '0x11954',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true
                              }
                            ],
                            rowId: '0x11959',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa3'
                          },
                          {
                            uid: '0x11973',
                            isDefault: true,
                            from_column: [
                              {
                                uid: '0x11954',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true
                              }
                            ],
                            rowId: '0x1195b',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa'
                          },
                          {
                            uid: '0x11974',
                            isDefault: true,
                            from_column: [
                              {
                                uid: '0x11954',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true
                              }
                            ],
                            rowId: '0x1195d',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa5'
                          },
                          {
                            uid: '0x11975',
                            isDefault: true,
                            from_column: [
                              {
                                uid: '0x11954',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true
                              }
                            ],
                            rowId: '0x1195f',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'adf'
                          },
                          {
                            uid: '0x119bd',
                            isDefault: true,
                            from_column: [
                              {
                                uid: '0x11954',
                                name: 'Name',
                                columnType: 'TEXT',
                                isDefault: true
                              }
                            ],
                            rowId: '0x119b9',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'asdfasdf'
                          }
                        ]
                      },
                      {
                        uid: '0x11955',
                        name: 'Notes',
                        columnType: 'TEXT',
                        isDefault: false
                      },
                      {
                        uid: '0x11969',
                        name: 'Field 4',
                        columnType: 'RECORD_REFERENCE',
                        isDefault: false,
                        foreignWorkspaceId: '0x124',
                        foreignCoreId: '0x11951',
                        foreignTableId: '0x11961',
                        oneToOne: false,
                        symmetricColumnId: '0x1196a'
                      },
                      {
                        uid: '0x119a9',
                        name: 'Formua',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x11955 & "DYAM"'
                      },
                      {
                        uid: '0x119b0',
                        name: 'Formu of FOrmu',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x119a9 & "Layer 2"'
                      },
                      {
                        uid: '0x119cc',
                        name: 'Number',
                        columnType: 'NUMBER',
                        precision: 1,
                        isDefault: false,
                        defaultNumber: 0,
                        has_rollup_update: [
                          {
                            uid: '0x119d4',
                            name: 'Sum Rollup',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: 'SUM($column_value_0x119cc)',
                            recordReferenceColumnId: '0x1196a'
                          }
                        ],
                        has_cell: [
                          {
                            uid: '0x119cd',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119cc',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0
                              }
                            ],
                            rowId: '0x11957',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 5555
                          },
                          {
                            uid: '0x119ce',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119cc',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0
                              }
                            ],
                            rowId: '0x11958',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 123
                          },
                          {
                            uid: '0x119cf',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119cc',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0
                              }
                            ],
                            rowId: '0x11959',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 21
                          },
                          {
                            uid: '0x119d0',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119cc',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0
                              }
                            ],
                            rowId: '0x1195b',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 312
                          },
                          {
                            uid: '0x119d1',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119cc',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0
                              }
                            ],
                            rowId: '0x1195d',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 31
                          },
                          {
                            uid: '0x119d2',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119cc',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0
                              }
                            ],
                            rowId: '0x1195f',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 1
                          },
                          {
                            uid: '0x119d3',
                            isDefault: false,
                            from_column: [
                              {
                                uid: '0x119cc',
                                name: 'Number',
                                columnType: 'NUMBER',
                                precision: 1,
                                isDefault: false,
                                defaultNumber: 0
                              }
                            ],
                            rowId: '0x119b9',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 1111
                          }
                        ]
                      }
                    ],
                    has_view: [
                      {
                        viewType: 'GRID',
                        has_column: [
                          {
                            uid: '0x11954',
                            name: 'Name',
                            columnType: 'TEXT',
                            isDefault: true,
                            'has_column|order': 0
                          },
                          {
                            uid: '0x11955',
                            name: 'Notes',
                            columnType: 'TEXT',
                            isDefault: false,
                            'has_column|order': 1
                          },
                          {
                            uid: '0x11969',
                            name: 'Field 4',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x1196a',
                            'has_column|order': 3
                          },
                          {
                            uid: '0x119a9',
                            name: 'Formua',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x11955 & "DYAM"',
                            'has_column|order': 4
                          },
                          {
                            uid: '0x119b0',
                            name: 'Formu of FOrmu',
                            columnType: 'FORMULA',
                            isDefault: false,
                            formula: '$column_value_0x119a9 & "Layer 2"',
                            'has_column|order': 5
                          },
                          {
                            uid: '0x119cc',
                            name: 'Number',
                            columnType: 'NUMBER',
                            precision: 1,
                            isDefault: false,
                            defaultNumber: 0,
                            'has_column|order': 6
                          }
                        ],
                        has_row: [
                          {
                            uid: '0x11957',
                            'has_row|order': 1
                          },
                          {
                            uid: '0x11958',
                            'has_row|order': 2
                          },
                          {
                            uid: '0x11959',
                            'has_row|order': 3
                          },
                          {
                            uid: '0x1195b',
                            'has_row|order': 4
                          },
                          {
                            uid: '0x1195d',
                            'has_row|order': 5
                          },
                          {
                            uid: '0x1195f',
                            'has_row|order': 6
                          },
                          {
                            uid: '0x119b9',
                            'has_row|order': 7
                          }
                        ],
                        uid: '0x11953',
                        name: 'Grid View',
                        isDefault: true,
                        has_user_group: [
                          {
                            color: 'N/A',
                            icon: 'N/A',
                            uid: '0x126',
                            name: 'Admin',
                            role: 'ADMIN'
                          }
                        ],
                        'has_view|order': 0
                      }
                    ],
                    has_row: [
                      {
                        uid: '0x11957',
                        has_cell: [
                          {
                            uid: '0x11970',
                            isDefault: true,
                            rowId: '0x11957',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa'
                          },
                          {
                            uid: '0x11976',
                            isDefault: false,
                            rowId: '0x11957',
                            columnId: '0x11955',
                            cellType: 'TEXT',
                            text: 'asdf'
                          },
                          {
                            uid: '0x1197c',
                            isDefault: false,
                            rowId: '0x11957',
                            columnId: '0x11969',
                            cellType: 'RECORD_REFERENCE'
                          },
                          {
                            uid: '0x119aa',
                            isDefault: false,
                            rowId: '0x11957',
                            columnId: '0x119a9',
                            cellType: 'FORMULA',
                            result: 'asdfDYAM'
                          },
                          {
                            uid: '0x119b1',
                            isDefault: false,
                            rowId: '0x11957',
                            columnId: '0x119b0',
                            cellType: 'FORMULA',
                            result: 'asdfDYAMLayer 2'
                          },
                          {
                            uid: '0x119cd',
                            isDefault: false,
                            rowId: '0x11957',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 5555
                          }
                        ]
                      },
                      {
                        uid: '0x11958',
                        has_cell: [
                          {
                            uid: '0x11971',
                            isDefault: true,
                            rowId: '0x11958',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa2'
                          },
                          {
                            uid: '0x11977',
                            isDefault: false,
                            rowId: '0x11958',
                            columnId: '0x11955',
                            cellType: 'TEXT',
                            text: '2323'
                          },
                          {
                            uid: '0x1197f',
                            isDefault: false,
                            rowId: '0x11958',
                            columnId: '0x11969',
                            cellType: 'RECORD_REFERENCE'
                          },
                          {
                            uid: '0x119ab',
                            isDefault: false,
                            rowId: '0x11958',
                            columnId: '0x119a9',
                            cellType: 'FORMULA',
                            result: '2323DYAM'
                          },
                          {
                            uid: '0x119b2',
                            isDefault: false,
                            rowId: '0x11958',
                            columnId: '0x119b0',
                            cellType: 'FORMULA',
                            result: '2323DYAMLayer 2'
                          },
                          {
                            uid: '0x119ce',
                            isDefault: false,
                            rowId: '0x11958',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 123
                          }
                        ]
                      },
                      {
                        uid: '0x11959',
                        has_cell: [
                          {
                            uid: '0x11972',
                            isDefault: true,
                            rowId: '0x11959',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa3'
                          },
                          {
                            uid: '0x11978',
                            isDefault: false,
                            rowId: '0x11959',
                            columnId: '0x11955',
                            cellType: 'LONG_TEXT',
                            text: 'e'
                          },
                          {
                            uid: '0x11983',
                            isDefault: false,
                            rowId: '0x11959',
                            columnId: '0x11969',
                            cellType: 'RECORD_REFERENCE'
                          },
                          {
                            uid: '0x119ac',
                            isDefault: false,
                            rowId: '0x11959',
                            columnId: '0x119a9',
                            cellType: 'FORMULA',
                            result: 'eDYAM'
                          },
                          {
                            uid: '0x119b3',
                            isDefault: false,
                            rowId: '0x11959',
                            columnId: '0x119b0',
                            cellType: 'FORMULA',
                            result: 'eDYAMLayer 2'
                          },
                          {
                            uid: '0x119cf',
                            isDefault: false,
                            rowId: '0x11959',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 21
                          }
                        ]
                      },
                      {
                        uid: '0x1195b',
                        has_cell: [
                          {
                            uid: '0x11973',
                            isDefault: true,
                            rowId: '0x1195b',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa'
                          },
                          {
                            uid: '0x11979',
                            isDefault: false,
                            rowId: '0x1195b',
                            columnId: '0x11955',
                            cellType: 'LONG_TEXT',
                            text: 'f'
                          },
                          {
                            uid: '0x11986',
                            isDefault: false,
                            rowId: '0x1195b',
                            columnId: '0x11969',
                            cellType: 'RECORD_REFERENCE'
                          },
                          {
                            uid: '0x119ad',
                            isDefault: false,
                            rowId: '0x1195b',
                            columnId: '0x119a9',
                            cellType: 'FORMULA',
                            result: 'fDYAM'
                          },
                          {
                            uid: '0x119b4',
                            isDefault: false,
                            rowId: '0x1195b',
                            columnId: '0x119b0',
                            cellType: 'FORMULA',
                            result: 'fDYAMLayer 2'
                          },
                          {
                            uid: '0x119d0',
                            isDefault: false,
                            rowId: '0x1195b',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 312
                          }
                        ]
                      },
                      {
                        uid: '0x1195d',
                        has_cell: [
                          {
                            uid: '0x11974',
                            isDefault: true,
                            rowId: '0x1195d',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'Whoa5'
                          },
                          {
                            uid: '0x1197a',
                            isDefault: false,
                            rowId: '0x1195d',
                            columnId: '0x11955',
                            cellType: 'LONG_TEXT',
                            text: 'g'
                          },
                          {
                            uid: '0x11989',
                            isDefault: false,
                            rowId: '0x1195d',
                            columnId: '0x11969',
                            cellType: 'RECORD_REFERENCE'
                          },
                          {
                            uid: '0x119ae',
                            isDefault: false,
                            rowId: '0x1195d',
                            columnId: '0x119a9',
                            cellType: 'FORMULA',
                            result: 'gDYAM'
                          },
                          {
                            uid: '0x119b5',
                            isDefault: false,
                            rowId: '0x1195d',
                            columnId: '0x119b0',
                            cellType: 'FORMULA',
                            result: 'gDYAMLayer 2'
                          },
                          {
                            uid: '0x119d1',
                            isDefault: false,
                            rowId: '0x1195d',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 31
                          }
                        ]
                      },
                      {
                        uid: '0x1195f',
                        has_cell: [
                          {
                            uid: '0x11975',
                            isDefault: true,
                            rowId: '0x1195f',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'adf'
                          },
                          {
                            uid: '0x1197b',
                            isDefault: false,
                            rowId: '0x1195f',
                            columnId: '0x11955',
                            cellType: 'LONG_TEXT',
                            text: 'h'
                          },
                          {
                            uid: '0x1198a',
                            isDefault: false,
                            rowId: '0x1195f',
                            columnId: '0x11969',
                            cellType: 'RECORD_REFERENCE'
                          },
                          {
                            uid: '0x119af',
                            isDefault: false,
                            rowId: '0x1195f',
                            columnId: '0x119a9',
                            cellType: 'FORMULA',
                            result: 'hDYAM'
                          },
                          {
                            uid: '0x119b6',
                            isDefault: false,
                            rowId: '0x1195f',
                            columnId: '0x119b0',
                            cellType: 'FORMULA',
                            result: 'hDYAMLayer 2'
                          },
                          {
                            uid: '0x119d2',
                            isDefault: false,
                            rowId: '0x1195f',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 1
                          }
                        ]
                      },
                      {
                        uid: '0x119b9',
                        has_cell: [
                          {
                            uid: '0x119ba',
                            isDefault: false,
                            rowId: '0x119b9',
                            columnId: '0x11969',
                            cellType: 'RECORD_REFERENCE'
                          },
                          {
                            uid: '0x119bb',
                            isDefault: false,
                            rowId: '0x119b9',
                            columnId: '0x11955',
                            cellType: 'TEXT',
                            text: 'asdf'
                          },
                          {
                            uid: '0x119bc',
                            isDefault: false,
                            rowId: '0x119b9',
                            columnId: '0x11955',
                            cellType: 'TEXT',
                            text: 'asdfasdf'
                          },
                          {
                            uid: '0x119bd',
                            isDefault: true,
                            rowId: '0x119b9',
                            columnId: '0x11954',
                            cellType: 'TEXT',
                            text: 'asdfasdf'
                          },
                          {
                            uid: '0x119be',
                            isDefault: false,
                            rowId: '0x119b9',
                            columnId: '0x119a9',
                            cellType: 'FORMULA',
                            result: 'asdf,asdfasdfDYAM'
                          },
                          {
                            uid: '0x119bf',
                            isDefault: false,
                            rowId: '0x119b9',
                            columnId: '0x119b0',
                            cellType: 'FORMULA',
                            result: 'asdf,asdfasdfDYAMLayer 2'
                          },
                          {
                            uid: '0x119d3',
                            isDefault: false,
                            rowId: '0x119b9',
                            columnId: '0x119cc',
                            cellType: 'NUMBER',
                            number: 1111
                          }
                        ]
                      }
                    ],
                    from_core: [
                      {
                        'has_table|order': 0,
                        color: 'blue',
                        icon: 'untitle',
                        uid: '0x11951',
                        name: 'Test'
                      }
                    ],
                    uid: '0x11952',
                    name: 'Default',
                    has_user_group: [
                      {
                        color: 'N/A',
                        icon: 'N/A',
                        uid: '0x126',
                        name: 'Admin',
                        role: 'ADMIN'
                      }
                    ]
                  }
                ],
                has_symmetric_column: [
                  {
                    uid: '0x11969',
                    name: 'Field 4',
                    columnType: 'RECORD_REFERENCE',
                    isDefault: false,
                    foreignWorkspaceId: '0x124',
                    foreignCoreId: '0x11951',
                    foreignTableId: '0x11961',
                    oneToOne: false,
                    symmetricColumnId: '0x1196a',
                    has_foreign_workspace: [
                      {
                        uid: '0x124',
                        name: 'Caminer'
                      }
                    ],
                    has_foreign_core: [
                      {
                        'has_table|order': 0,
                        color: 'blue',
                        icon: 'untitle',
                        uid: '0x11951',
                        name: 'Test'
                      }
                    ],
                    has_foreign_table: [
                      {
                        'has_view|order': 0,
                        uid: '0x11961',
                        name: 'Table 2'
                      }
                    ],
                    has_symmetric_column: [
                      {
                        uid: '0x1196a',
                        name: 'Default',
                        columnType: 'RECORD_REFERENCE',
                        isDefault: false,
                        foreignWorkspaceId: '0x124',
                        foreignCoreId: '0x11951',
                        foreignTableId: '0x11952',
                        oneToOne: false,
                        symmetricColumnId: '0x11969'
                      }
                    ],
                    has_cell: [
                      {
                        uid: '0x1197c',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11969',
                            name: 'Field 4',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x11957',
                        columnId: '0x11969',
                        has_foreign_row: [
                          {
                            uid: '0x11966'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      },
                      {
                        uid: '0x1197f',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11969',
                            name: 'Field 4',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x11958',
                        columnId: '0x11969',
                        has_foreign_row: [
                          {
                            uid: '0x11966'
                          },
                          {
                            uid: '0x11967'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      },
                      {
                        uid: '0x11983',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11969',
                            name: 'Field 4',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x11959',
                        columnId: '0x11969',
                        has_foreign_row: [
                          {
                            uid: '0x11966'
                          },
                          {
                            uid: '0x11967'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      },
                      {
                        uid: '0x11986',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11969',
                            name: 'Field 4',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x1195b',
                        columnId: '0x11969',
                        has_foreign_row: [
                          {
                            uid: '0x11966'
                          },
                          {
                            uid: '0x11968'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      },
                      {
                        uid: '0x11989',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11969',
                            name: 'Field 4',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x1195d',
                        columnId: '0x11969',
                        has_foreign_row: [
                          {
                            uid: '0x11966'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      },
                      {
                        uid: '0x1198a',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11969',
                            name: 'Field 4',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x1195f',
                        columnId: '0x11969',
                        has_foreign_row: [
                          {
                            uid: '0x11967'
                          }
                        ],
                        cellType: 'RECORD_REFERENCE'
                      },
                      {
                        uid: '0x119ba',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x11969',
                            name: 'Field 4',
                            columnType: 'RECORD_REFERENCE',
                            isDefault: false,
                            foreignWorkspaceId: '0x124',
                            foreignCoreId: '0x11951',
                            foreignTableId: '0x11961',
                            oneToOne: false,
                            symmetricColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x119b9',
                        columnId: '0x11969',
                        cellType: 'RECORD_REFERENCE'
                      }
                    ]
                  }
                ],
                from_formula_column: [
                  {
                    uid: '0x11963',
                    name: 'Name',
                    columnType: 'FORMULA',
                    isDefault: true,
                    formula: '$column_value_0x1196a',
                    has_cell: [
                      {
                        uid: '0x11980',
                        isDefault: true,
                        from_column: [
                          {
                            uid: '0x11963',
                            name: 'Name',
                            columnType: 'FORMULA',
                            isDefault: true,
                            formula: '$column_value_0x1196a'
                          }
                        ],
                        rowId: '0x11966',
                        columnId: '0x11963',
                        cellType: 'FORMULA',
                        result: 'Whoa, Whoa2, Whoa3, Whoa, Whoa5'
                      },
                      {
                        uid: '0x11981',
                        isDefault: true,
                        from_column: [
                          {
                            uid: '0x11963',
                            name: 'Name',
                            columnType: 'FORMULA',
                            isDefault: true,
                            formula: '$column_value_0x1196a'
                          }
                        ],
                        rowId: '0x11967',
                        columnId: '0x11963',
                        cellType: 'FORMULA',
                        result: 'bc, d, adf'
                      },
                      {
                        uid: '0x11982',
                        isDefault: true,
                        from_column: [
                          {
                            uid: '0x11963',
                            name: 'Name',
                            columnType: 'FORMULA',
                            isDefault: true,
                            formula: '$column_value_0x1196a'
                          }
                        ],
                        rowId: '0x11968',
                        columnId: '0x11963',
                        cellType: 'FORMULA',
                        result: 'asdf'
                      }
                    ]
                  }
                ],
                has_lookup_column: [
                  {
                    uid: '0x1196b',
                    name: 'Lookup Notes',
                    columnType: 'LOOKUP',
                    isDefault: false,
                    foreignLookupColumnId: '0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                has_rollup_column: [
                  {
                    uid: '0x1196c',
                    name: 'Rollup NOtes',
                    columnType: 'ROLLUP',
                    isDefault: false,
                    formula: '$column_value_0x11955',
                    recordReferenceColumnId: '0x1196a'
                  },
                  {
                    uid: '0x119d4',
                    name: 'Sum Rollup',
                    columnType: 'ROLLUP',
                    isDefault: false,
                    formula: 'SUM($column_value_0x119cc)',
                    recordReferenceColumnId: '0x1196a',
                    has_rollup_update: [
                      {
                        uid: '0x119d8',
                        name: 'Sum of Sum of ROllup',
                        columnType: 'ROLLUP',
                        isDefault: false,
                        formula: 'SUM($column_value_0x119d4)',
                        recordReferenceColumnId: '0x11997'
                      }
                    ],
                    has_foreign_lookup_column: [
                      {
                        uid: '0x119cc',
                        name: 'Number',
                        columnType: 'NUMBER',
                        precision: 1,
                        isDefault: false,
                        defaultNumber: 0
                      }
                    ],
                    has_record_reference_column: [
                      {
                        uid: '0x1196a',
                        name: 'Default',
                        columnType: 'RECORD_REFERENCE',
                        isDefault: false,
                        foreignWorkspaceId: '0x124',
                        foreignCoreId: '0x11951',
                        foreignTableId: '0x11952',
                        oneToOne: false,
                        symmetricColumnId: '0x11969'
                      }
                    ],
                    has_cell: [
                      {
                        uid: '0x119d5',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x119d4',
                            name: 'Sum Rollup',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: 'SUM($column_value_0x119cc)',
                            recordReferenceColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x11966',
                        columnId: '0x119d4',
                        cellType: 'ROLLUP',
                        result: '6042'
                      },
                      {
                        uid: '0x119d6',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x119d4',
                            name: 'Sum Rollup',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: 'SUM($column_value_0x119cc)',
                            recordReferenceColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x11967',
                        columnId: '0x119d4',
                        cellType: 'ROLLUP',
                        result: '145'
                      },
                      {
                        uid: '0x119d7',
                        isDefault: false,
                        from_column: [
                          {
                            uid: '0x119d4',
                            name: 'Sum Rollup',
                            columnType: 'ROLLUP',
                            isDefault: false,
                            formula: 'SUM($column_value_0x119cc)',
                            recordReferenceColumnId: '0x1196a'
                          }
                        ],
                        rowId: '0x11968',
                        columnId: '0x119d4',
                        cellType: 'ROLLUP',
                        result: '312'
                      }
                    ]
                  }
                ],
                has_cell: [
                  {
                    uid: '0x1197d',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x1196a',
                        name: 'Default',
                        columnType: 'RECORD_REFERENCE',
                        isDefault: false,
                        foreignWorkspaceId: '0x124',
                        foreignCoreId: '0x11951',
                        foreignTableId: '0x11952',
                        oneToOne: false,
                        symmetricColumnId: '0x11969'
                      }
                    ],
                    rowId: '0x11966',
                    columnId: '0x1196a',
                    has_foreign_row: [
                      {
                        uid: '0x11957'
                      },
                      {
                        uid: '0x11958'
                      },
                      {
                        uid: '0x11959'
                      },
                      {
                        uid: '0x1195b'
                      },
                      {
                        uid: '0x1195d'
                      }
                    ],
                    cellType: 'RECORD_REFERENCE'
                  },
                  {
                    uid: '0x11984',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x1196a',
                        name: 'Default',
                        columnType: 'RECORD_REFERENCE',
                        isDefault: false,
                        foreignWorkspaceId: '0x124',
                        foreignCoreId: '0x11951',
                        foreignTableId: '0x11952',
                        oneToOne: false,
                        symmetricColumnId: '0x11969'
                      }
                    ],
                    rowId: '0x11967',
                    columnId: '0x1196a',
                    has_foreign_row: [
                      {
                        uid: '0x11958'
                      },
                      {
                        uid: '0x11959'
                      },
                      {
                        uid: '0x1195f'
                      }
                    ],
                    cellType: 'RECORD_REFERENCE'
                  },
                  {
                    uid: '0x11987',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x1196a',
                        name: 'Default',
                        columnType: 'RECORD_REFERENCE',
                        isDefault: false,
                        foreignWorkspaceId: '0x124',
                        foreignCoreId: '0x11951',
                        foreignTableId: '0x11952',
                        oneToOne: false,
                        symmetricColumnId: '0x11969'
                      }
                    ],
                    rowId: '0x11968',
                    columnId: '0x1196a',
                    has_foreign_row: [
                      {
                        uid: '0x1195b'
                      }
                    ],
                    cellType: 'RECORD_REFERENCE'
                  }
                ]
              }
            ],
            from_formula_column: [
              {
                uid: '0x1198b',
                name: 'FOrmula2',
                columnType: 'FORMULA',
                isDefault: false,
                formula: '$column_value_0x1196c & "Whoa"',
                has_cell: [
                  {
                    uid: '0x1198c',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x1198b',
                        name: 'FOrmula2',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x1196c & "Whoa"'
                      }
                    ],
                    rowId: '0x11966',
                    columnId: '0x1198b',
                    cellType: 'FORMULA',
                    result: 'asdf, 2323, e, f, gWhoa'
                  },
                  {
                    uid: '0x1198d',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x1198b',
                        name: 'FOrmula2',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x1196c & "Whoa"'
                      }
                    ],
                    rowId: '0x11967',
                    columnId: '0x1198b',
                    cellType: 'FORMULA',
                    result: '2323, e, hWhoa'
                  },
                  {
                    uid: '0x1198e',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x1198b',
                        name: 'FOrmula2',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x1196c & "Whoa"'
                      }
                    ],
                    rowId: '0x11968',
                    columnId: '0x1198b',
                    cellType: 'FORMULA',
                    result: 'fWhoa'
                  }
                ]
              }
            ],
            has_cell: [
              {
                uid: '0x1196d',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x1196c',
                    name: 'Rollup NOtes',
                    columnType: 'ROLLUP',
                    isDefault: false,
                    formula: '$column_value_0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                rowId: '0x11966',
                columnId: '0x1196c',
                cellType: 'ROLLUP',
                result: 'asdf, 2323, e, f, g'
              },
              {
                uid: '0x1196e',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x1196c',
                    name: 'Rollup NOtes',
                    columnType: 'ROLLUP',
                    isDefault: false,
                    formula: '$column_value_0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                rowId: '0x11967',
                columnId: '0x1196c',
                cellType: 'ROLLUP',
                result: '2323, e, h'
              },
              {
                uid: '0x1196f',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x1196c',
                    name: 'Rollup NOtes',
                    columnType: 'ROLLUP',
                    isDefault: false,
                    formula: '$column_value_0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                rowId: '0x11968',
                columnId: '0x1196c',
                cellType: 'ROLLUP',
                result: 'f'
              }
            ]
          }
        ],
        has_lookup_update: [
          {
            uid: '0x1196b',
            name: 'Lookup Notes',
            columnType: 'LOOKUP',
            isDefault: false,
            foreignLookupColumnId: '0x11955',
            recordReferenceColumnId: '0x1196a',
            has_lookup_update: [
              {
                uid: '0x119a5',
                name: 'Lookup lookup',
                columnType: 'LOOKUP',
                isDefault: false,
                foreignLookupColumnId: '0x1196b',
                recordReferenceColumnId: '0x11997',
                has_foreign_lookup_column: [
                  {
                    uid: '0x1196b',
                    name: 'Lookup Notes',
                    columnType: 'LOOKUP',
                    isDefault: false,
                    foreignLookupColumnId: '0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                has_record_reference_column: [
                  {
                    uid: '0x11997',
                    name: 'Table 2',
                    columnType: 'RECORD_REFERENCE',
                    isDefault: false,
                    foreignWorkspaceId: '0x124',
                    foreignCoreId: '0x11951',
                    foreignTableId: '0x11961',
                    oneToOne: false,
                    symmetricColumnId: '0x11964'
                  }
                ],
                has_cell: [
                  {
                    uid: '0x119a6',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119a5',
                        name: 'Lookup lookup',
                        columnType: 'LOOKUP',
                        isDefault: false,
                        foreignLookupColumnId: '0x1196b',
                        recordReferenceColumnId: '0x11997'
                      }
                    ],
                    rowId: '0x11994',
                    columnId: '0x119a5',
                    has_lookup_cell: [
                      {
                        uid: '0x1197e',
                        isDefault: false,
                        rowId: '0x11966',
                        columnId: '0x1196b',
                        cellType: 'LOOKUP'
                      }
                    ],
                    cellType: 'LOOKUP'
                  },
                  {
                    uid: '0x119a7',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119a5',
                        name: 'Lookup lookup',
                        columnType: 'LOOKUP',
                        isDefault: false,
                        foreignLookupColumnId: '0x1196b',
                        recordReferenceColumnId: '0x11997'
                      }
                    ],
                    rowId: '0x11995',
                    columnId: '0x119a5',
                    has_lookup_cell: [
                      {
                        uid: '0x1197e',
                        isDefault: false,
                        rowId: '0x11966',
                        columnId: '0x1196b',
                        cellType: 'LOOKUP'
                      }
                    ],
                    cellType: 'LOOKUP'
                  },
                  {
                    uid: '0x119a8',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119a5',
                        name: 'Lookup lookup',
                        columnType: 'LOOKUP',
                        isDefault: false,
                        foreignLookupColumnId: '0x1196b',
                        recordReferenceColumnId: '0x11997'
                      }
                    ],
                    rowId: '0x11996',
                    columnId: '0x119a5',
                    has_lookup_cell: [
                      {
                        uid: '0x1197e',
                        isDefault: false,
                        rowId: '0x11966',
                        columnId: '0x1196b',
                        cellType: 'LOOKUP'
                      },
                      {
                        uid: '0x11985',
                        isDefault: false,
                        rowId: '0x11967',
                        columnId: '0x1196b',
                        cellType: 'LOOKUP'
                      }
                    ],
                    cellType: 'LOOKUP'
                  }
                ]
              }
            ],
            has_foreign_lookup_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            has_record_reference_column: [
              {
                uid: '0x1196a',
                name: 'Default',
                columnType: 'RECORD_REFERENCE',
                isDefault: false,
                foreignWorkspaceId: '0x124',
                foreignCoreId: '0x11951',
                foreignTableId: '0x11952',
                oneToOne: false,
                symmetricColumnId: '0x11969'
              }
            ],
            has_cell: [
              {
                uid: '0x1197e',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x1196b',
                    name: 'Lookup Notes',
                    columnType: 'LOOKUP',
                    isDefault: false,
                    foreignLookupColumnId: '0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                rowId: '0x11966',
                columnId: '0x1196b',
                has_lookup_cell: [
                  {
                    uid: '0x11976',
                    isDefault: false,
                    rowId: '0x11957',
                    columnId: '0x11955',
                    cellType: 'TEXT',
                    text: 'asdf'
                  },
                  {
                    uid: '0x11977',
                    isDefault: false,
                    rowId: '0x11958',
                    columnId: '0x11955',
                    cellType: 'TEXT',
                    text: '2323'
                  },
                  {
                    uid: '0x11978',
                    isDefault: false,
                    rowId: '0x11959',
                    columnId: '0x11955',
                    cellType: 'LONG_TEXT',
                    text: 'e'
                  },
                  {
                    uid: '0x11979',
                    isDefault: false,
                    rowId: '0x1195b',
                    columnId: '0x11955',
                    cellType: 'LONG_TEXT',
                    text: 'f'
                  },
                  {
                    uid: '0x1197a',
                    isDefault: false,
                    rowId: '0x1195d',
                    columnId: '0x11955',
                    cellType: 'LONG_TEXT',
                    text: 'g'
                  },
                  {
                    uid: '0x119bc',
                    isDefault: false,
                    rowId: '0x119b9',
                    columnId: '0x11955',
                    cellType: 'TEXT',
                    text: 'asdfasdf'
                  },
                  {
                    uid: '0x119c0',
                    rowId: '0x119b9',
                    columnId: '0x11955'
                  }
                ],
                cellType: 'LOOKUP'
              },
              {
                uid: '0x11985',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x1196b',
                    name: 'Lookup Notes',
                    columnType: 'LOOKUP',
                    isDefault: false,
                    foreignLookupColumnId: '0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                rowId: '0x11967',
                columnId: '0x1196b',
                has_lookup_cell: [
                  {
                    uid: '0x11977',
                    isDefault: false,
                    rowId: '0x11958',
                    columnId: '0x11955',
                    cellType: 'TEXT',
                    text: '2323'
                  },
                  {
                    uid: '0x11978',
                    isDefault: false,
                    rowId: '0x11959',
                    columnId: '0x11955',
                    cellType: 'LONG_TEXT',
                    text: 'e'
                  },
                  {
                    uid: '0x1197b',
                    isDefault: false,
                    rowId: '0x1195f',
                    columnId: '0x11955',
                    cellType: 'LONG_TEXT',
                    text: 'h'
                  }
                ],
                cellType: 'LOOKUP'
              },
              {
                uid: '0x11988',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x1196b',
                    name: 'Lookup Notes',
                    columnType: 'LOOKUP',
                    isDefault: false,
                    foreignLookupColumnId: '0x11955',
                    recordReferenceColumnId: '0x1196a'
                  }
                ],
                rowId: '0x11968',
                columnId: '0x1196b',
                has_lookup_cell: [
                  {
                    uid: '0x11979',
                    isDefault: false,
                    rowId: '0x1195b',
                    columnId: '0x11955',
                    cellType: 'LONG_TEXT',
                    text: 'f'
                  }
                ],
                cellType: 'LOOKUP'
              }
            ]
          }
        ],
        from_formula_column: [
          {
            uid: '0x119a9',
            name: 'Formua',
            columnType: 'FORMULA',
            isDefault: false,
            formula: '$column_value_0x11955 & "DYAM"',
            from_formula_column: [
              {
                uid: '0x119b0',
                name: 'Formu of FOrmu',
                columnType: 'FORMULA',
                isDefault: false,
                formula: '$column_value_0x119a9 & "Layer 2"',
                has_cell: [
                  {
                    uid: '0x119b1',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119b0',
                        name: 'Formu of FOrmu',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x119a9 & "Layer 2"'
                      }
                    ],
                    rowId: '0x11957',
                    columnId: '0x119b0',
                    cellType: 'FORMULA',
                    result: 'asdfDYAMLayer 2'
                  },
                  {
                    uid: '0x119b2',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119b0',
                        name: 'Formu of FOrmu',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x119a9 & "Layer 2"'
                      }
                    ],
                    rowId: '0x11958',
                    columnId: '0x119b0',
                    cellType: 'FORMULA',
                    result: '2323DYAMLayer 2'
                  },
                  {
                    uid: '0x119b3',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119b0',
                        name: 'Formu of FOrmu',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x119a9 & "Layer 2"'
                      }
                    ],
                    rowId: '0x11959',
                    columnId: '0x119b0',
                    cellType: 'FORMULA',
                    result: 'eDYAMLayer 2'
                  },
                  {
                    uid: '0x119b4',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119b0',
                        name: 'Formu of FOrmu',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x119a9 & "Layer 2"'
                      }
                    ],
                    rowId: '0x1195b',
                    columnId: '0x119b0',
                    cellType: 'FORMULA',
                    result: 'fDYAMLayer 2'
                  },
                  {
                    uid: '0x119b5',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119b0',
                        name: 'Formu of FOrmu',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x119a9 & "Layer 2"'
                      }
                    ],
                    rowId: '0x1195d',
                    columnId: '0x119b0',
                    cellType: 'FORMULA',
                    result: 'gDYAMLayer 2'
                  },
                  {
                    uid: '0x119b6',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119b0',
                        name: 'Formu of FOrmu',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x119a9 & "Layer 2"'
                      }
                    ],
                    rowId: '0x1195f',
                    columnId: '0x119b0',
                    cellType: 'FORMULA',
                    result: 'hDYAMLayer 2'
                  },
                  {
                    uid: '0x119bf',
                    isDefault: false,
                    from_column: [
                      {
                        uid: '0x119b0',
                        name: 'Formu of FOrmu',
                        columnType: 'FORMULA',
                        isDefault: false,
                        formula: '$column_value_0x119a9 & "Layer 2"'
                      }
                    ],
                    rowId: '0x119b9',
                    columnId: '0x119b0',
                    cellType: 'FORMULA',
                    result: 'asdf,asdfasdfDYAMLayer 2'
                  }
                ]
              }
            ],
            has_cell: [
              {
                uid: '0x119aa',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x119a9',
                    name: 'Formua',
                    columnType: 'FORMULA',
                    isDefault: false,
                    formula: '$column_value_0x11955 & "DYAM"'
                  }
                ],
                rowId: '0x11957',
                columnId: '0x119a9',
                cellType: 'FORMULA',
                result: 'asdfDYAM'
              },
              {
                uid: '0x119ab',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x119a9',
                    name: 'Formua',
                    columnType: 'FORMULA',
                    isDefault: false,
                    formula: '$column_value_0x11955 & "DYAM"'
                  }
                ],
                rowId: '0x11958',
                columnId: '0x119a9',
                cellType: 'FORMULA',
                result: '2323DYAM'
              },
              {
                uid: '0x119ac',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x119a9',
                    name: 'Formua',
                    columnType: 'FORMULA',
                    isDefault: false,
                    formula: '$column_value_0x11955 & "DYAM"'
                  }
                ],
                rowId: '0x11959',
                columnId: '0x119a9',
                cellType: 'FORMULA',
                result: 'eDYAM'
              },
              {
                uid: '0x119ad',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x119a9',
                    name: 'Formua',
                    columnType: 'FORMULA',
                    isDefault: false,
                    formula: '$column_value_0x11955 & "DYAM"'
                  }
                ],
                rowId: '0x1195b',
                columnId: '0x119a9',
                cellType: 'FORMULA',
                result: 'fDYAM'
              },
              {
                uid: '0x119ae',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x119a9',
                    name: 'Formua',
                    columnType: 'FORMULA',
                    isDefault: false,
                    formula: '$column_value_0x11955 & "DYAM"'
                  }
                ],
                rowId: '0x1195d',
                columnId: '0x119a9',
                cellType: 'FORMULA',
                result: 'gDYAM'
              },
              {
                uid: '0x119af',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x119a9',
                    name: 'Formua',
                    columnType: 'FORMULA',
                    isDefault: false,
                    formula: '$column_value_0x11955 & "DYAM"'
                  }
                ],
                rowId: '0x1195f',
                columnId: '0x119a9',
                cellType: 'FORMULA',
                result: 'hDYAM'
              },
              {
                uid: '0x119be',
                isDefault: false,
                from_column: [
                  {
                    uid: '0x119a9',
                    name: 'Formua',
                    columnType: 'FORMULA',
                    isDefault: false,
                    formula: '$column_value_0x11955 & "DYAM"'
                  }
                ],
                rowId: '0x119b9',
                columnId: '0x119a9',
                cellType: 'FORMULA',
                result: 'asdf,asdfasdfDYAM'
              }
            ]
          }
        ],
        has_cell: [
          {
            uid: '0x11976',
            isDefault: false,
            from_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            rowId: '0x11957',
            columnId: '0x11955',
            cellType: 'TEXT',
            text: 'asdf'
          },
          {
            uid: '0x11977',
            isDefault: false,
            from_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            rowId: '0x11958',
            columnId: '0x11955',
            cellType: 'TEXT',
            text: '2323'
          },
          {
            uid: '0x11978',
            isDefault: false,
            from_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            rowId: '0x11959',
            columnId: '0x11955',
            cellType: 'LONG_TEXT',
            text: 'e'
          },
          {
            uid: '0x11979',
            isDefault: false,
            from_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            rowId: '0x1195b',
            columnId: '0x11955',
            cellType: 'LONG_TEXT',
            text: 'f'
          },
          {
            uid: '0x1197a',
            isDefault: false,
            from_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            rowId: '0x1195d',
            columnId: '0x11955',
            cellType: 'LONG_TEXT',
            text: 'g'
          },
          {
            uid: '0x1197b',
            isDefault: false,
            from_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            rowId: '0x1195f',
            columnId: '0x11955',
            cellType: 'LONG_TEXT',
            text: 'h'
          },
          {
            uid: '0x119bb',
            isDefault: false,
            from_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            rowId: '0x119b9',
            columnId: '0x11955',
            cellType: 'TEXT',
            text: 'asdf'
          },
          {
            uid: '0x119bc',
            isDefault: false,
            from_column: [
              {
                uid: '0x11955',
                name: 'Notes',
                columnType: 'TEXT',
                isDefault: false
              }
            ],
            rowId: '0x119b9',
            columnId: '0x11955',
            cellType: 'TEXT',
            text: 'asdfasdf'
          }
        ]
      }
    ]
  },
  extensions: {
    server_latency: {
      parsing_ns: 72600,
      processing_ns: 1617441400,
      encoding_ns: 18351200,
      assign_timestamp_ns: 901200
    },
    txn: {
      start_ts: 243922
    }
  }
};
