(function() {var implementors = {};
implementors["chrono"] = [{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"chrono/naive/struct.NaiveDate.html\" title=\"struct chrono::naive::NaiveDate\">NaiveDate</a>",synthetic:false,types:["chrono::naive::date::NaiveDate"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"chrono/naive/struct.NaiveTime.html\" title=\"struct chrono::naive::NaiveTime\">NaiveTime</a>",synthetic:false,types:["chrono::naive::time::NaiveTime"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"chrono/naive/struct.NaiveDateTime.html\" title=\"struct chrono::naive::NaiveDateTime\">NaiveDateTime</a>",synthetic:false,types:["chrono::naive::datetime::NaiveDateTime"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"chrono/struct.DateTime.html\" title=\"struct chrono::DateTime\">DateTime</a>&lt;<a class=\"struct\" href=\"chrono/offset/struct.FixedOffset.html\" title=\"struct chrono::offset::FixedOffset\">FixedOffset</a>&gt;",synthetic:false,types:["chrono::datetime::DateTime"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"chrono/struct.DateTime.html\" title=\"struct chrono::DateTime\">DateTime</a>&lt;<a class=\"struct\" href=\"chrono/offset/struct.Utc.html\" title=\"struct chrono::offset::Utc\">Utc</a>&gt;",synthetic:false,types:["chrono::datetime::DateTime"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"chrono/struct.DateTime.html\" title=\"struct chrono::DateTime\">DateTime</a>&lt;<a class=\"struct\" href=\"chrono/offset/struct.Local.html\" title=\"struct chrono::offset::Local\">Local</a>&gt;",synthetic:false,types:["chrono::datetime::DateTime"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"chrono/enum.Weekday.html\" title=\"enum chrono::Weekday\">Weekday</a>",synthetic:false,types:["chrono::Weekday"]},];
implementors["hashbrown"] = [{text:"impl&lt;'de, K, V, S&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"hashbrown/struct.HashMap.html\" title=\"struct hashbrown::HashMap\">HashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>",synthetic:false,types:["hashbrown::map::HashMap"]},{text:"impl&lt;'de, T, S&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"hashbrown/struct.HashSet.html\" title=\"struct hashbrown::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>",synthetic:false,types:["hashbrown::set::HashSet"]},];
implementors["serde_json"] = [{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/map/struct.Map.html\" title=\"struct serde_json::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>&gt;",synthetic:false,types:["serde_json::map::Map"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>",synthetic:false,types:["serde_json::value::Value"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/struct.Number.html\" title=\"struct serde_json::Number\">Number</a>",synthetic:false,types:["serde_json::number::Number"]},];
implementors["super_analyzer_core"] = [{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"super_analyzer_core/struct.Config.html\" title=\"struct super_analyzer_core::Config\">Config</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"super_analyzer_core/struct.Config.html\" title=\"struct super_analyzer_core::Config\">Config</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>",synthetic:false,types:["super_analyzer_core::config::Config"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __Field",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"super_analyzer_core/struct.Config.html\" title=\"struct super_analyzer_core::Config\">Config</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"super_analyzer_core/struct.Config.html\" title=\"struct super_analyzer_core::Config\">Config</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"super_analyzer_core/config/struct.Permission.html\" title=\"struct super_analyzer_core::config::Permission\">Permission</a>",synthetic:false,types:["super_analyzer_core::config::Permission"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __Field",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"super_analyzer_core/criticality/enum.Criticality.html\" title=\"enum super_analyzer_core::criticality::Criticality\">Criticality</a>",synthetic:false,types:["super_analyzer_core::criticality::Criticality"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __Field",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"super_analyzer_core/static_analysis/code/struct.Rule.html\" title=\"struct super_analyzer_core::static_analysis::code::Rule\">Rule</a>",synthetic:false,types:["super_analyzer_core::static_analysis::code::Rule"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __Field",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt;",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt;",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt;",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt;",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt;",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt;",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt;",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for __DeserializeWith&lt;'de&gt;",synthetic:false,types:[]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"super_analyzer_core/static_analysis/manifest/enum.Permission.html\" title=\"enum super_analyzer_core::static_analysis::manifest::Permission\">Permission</a>",synthetic:false,types:["super_analyzer_core::static_analysis::manifest::Permission"]},];
implementors["toml"] = [{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"toml/map/struct.Map.html\" title=\"struct toml::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>&gt;",synthetic:false,types:["toml::map::Map"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>",synthetic:false,types:["toml::value::Value"]},{text:"impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"toml/value/struct.Datetime.html\" title=\"struct toml::value::Datetime\">Datetime</a>",synthetic:false,types:["toml::datetime::Datetime"]},{text:"impl&lt;'de, T&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"toml/struct.Spanned.html\" title=\"struct toml::Spanned\">Spanned</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>",synthetic:false,types:["toml::spanned::Spanned"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()