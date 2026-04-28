import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'app.css': {
                        table: 'sys_ux_theme_asset'
                        id: 'b6bd79ff367e44d89a814ee8b59a19ff'
                    }
                    'App.css': {
                        table: 'sys_ux_theme_asset'
                        id: '5545364f778a4b67b6e05f2781829ee7'
                        deleted: true
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4718ce3979ba47b4a912d669dc8de35e'
                    }
                    'home-page-menu': {
                        table: 'sys_app_application'
                        id: '4eca3af3b786491fa628ef4e99682547'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '841bf61cd375467dab3ed25ec9170ea9'
                    }
                }
                composite: [
                    {
                        table: 'sys_ux_lib_asset'
                        id: '1976975c5539426ab122a413c87ebe41'
                        key: {
                            name: 'x_488299_home_page/main'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '3447fc8e44d4492184e520a28b73a28b'
                        deleted: true
                        key: {
                            endpoint: 'x_488299_home_page_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '3d6685ae657c4780a20abd42acd723dc'
                        key: {
                            endpoint: 'x_488299_home_page_Home.do'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '3e5db77b53434c708dc2d3c2f9f6520d'
                        key: {
                            name: 'x_488299_home_page_Home.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '5ba8731529814fd0a9db2c13710f23d9'
                        key: {
                            name: 'x_488299_home_page/main.js.map'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '606c7dd2725f4b469acc045895edfe8a'
                        deleted: true
                        key: {
                            application_file: '5ba8731529814fd0a9db2c13710f23d9'
                            source_artifact: '98d43db6cbb648bfa816162273258ead'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '8eeab61010b046d7864a35c7a23b1031'
                        key: {
                            application_file: '1976975c5539426ab122a413c87ebe41'
                            source_artifact: '3e5db77b53434c708dc2d3c2f9f6520d'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '98d43db6cbb648bfa816162273258ead'
                        deleted: true
                        key: {
                            name: 'x_488299_home_page_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'bda32fe211ae4754b910d449cd300864'
                        deleted: true
                        key: {
                            application_file: '1976975c5539426ab122a413c87ebe41'
                            source_artifact: '98d43db6cbb648bfa816162273258ead'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'ce14788944d544aabdfb8cfe042a9d25'
                        key: {
                            application_file: '5ba8731529814fd0a9db2c13710f23d9'
                            source_artifact: '3e5db77b53434c708dc2d3c2f9f6520d'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f462a42adc064124bbb771247be09dee'
                        deleted: true
                        key: {
                            application_file: '3447fc8e44d4492184e520a28b73a28b'
                            source_artifact: '98d43db6cbb648bfa816162273258ead'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f7adaeba72e447818e910467c5adff79'
                        key: {
                            application_file: '3d6685ae657c4780a20abd42acd723dc'
                            source_artifact: '3e5db77b53434c708dc2d3c2f9f6520d'
                        }
                    },
                ]
            }
        }
    }
}
